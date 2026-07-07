import { spawn } from 'node:child_process';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');
const previewPort = 4173;

const OUTPUT_BY_SLUG = {
  'ekk6033teeig6btp7dw2kppuimvf1wtafpe3viy5461v5e1gm5kwmmqci166ycg2kdjw39ketgkigukj1cx47a2y23ji2qi6ypke': 'propuestaJudicial.pdf',
  'ra047n7x8vch04mtpd88nke2ft6cpvwwbi9zigxarrcby8efu4pmepxwd6t8a4nmfei11xk6n0w1uuecmm7iwyi4hvty69bxabjd': 'propuestaIndare.pdf',
  'propuesta-comercial-juridica': 'propuestaComercialJuridica.pdf',
};

/** A4 width at 96 DPI — matches the rendered page width in the PDF. */
const A4_VIEWPORT = { width: 794, height: 1200 };

function getExportConfig() {
  const slug = process.argv[2] ?? 'ekk6033teeig6btp7dw2kppuimvf1wtafpe3viy5461v5e1gm5kwmmqci166ycg2kdjw39ketgkigukj1cx47a2y23ji2qi6ypke';
  const outputFile = OUTPUT_BY_SLUG[slug];

  if (!outputFile) {
    throw new Error(
      `Unknown proposal slug "${slug}". Supported: ${Object.keys(OUTPUT_BY_SLUG).join(', ')}`,
    );
  }

  return {
    slug,
    outputPath: path.join(rootDir, outputFile),
    previewUrl: `http://127.0.0.1:${previewPort}/${slug}`,
  };
}

function waitForServer(url, timeoutMs = 30_000) {
  const startedAt = Date.now();

  return new Promise((resolve, reject) => {
    const check = () => {
      const request = http.get(url, (response) => {
        response.resume();
        if (response.statusCode && response.statusCode >= 200 && response.statusCode < 500) {
          resolve(undefined);
          return;
        }
        retry();
      });

      request.on('error', retry);

      function retry() {
        if (Date.now() - startedAt > timeoutMs) {
          reject(new Error(`Preview server did not start within ${timeoutMs}ms`));
          return;
        }
        setTimeout(check, 250);
      }
    };

    check();
  });
}

function startPreviewServer() {
  const child = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(previewPort), '--strictPort'], {
    cwd: rootDir,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  return child;
}

async function preparePageForPdf(page) {
  await page.setViewportSize(A4_VIEWPORT);

  await page.evaluate(() => {
    document.documentElement.classList.add('pdf-export');

    document.querySelectorAll('.react-flow__edge.animated').forEach((edge) => {
      edge.classList.remove('animated');
    });

    document.querySelectorAll('.react-flow__edge-path').forEach((pathEl) => {
      pathEl.style.animation = 'none';
      pathEl.style.strokeDasharray = 'none';
    });

    window.dispatchEvent(new Event('resize'));
    window.dispatchEvent(new CustomEvent('pdf-export-ready'));

    document.querySelectorAll('.proposal-full-bleed').forEach((el) => {
      el.style.position = 'static';
      el.style.left = 'auto';
      el.style.marginLeft = '0';
      el.style.marginTop = '0';
      el.style.width = '100%';
      el.style.maxWidth = '100%';
    });
  });

  const hasDiagramRefit = await page.evaluate(() => typeof window.__refitAllContextFlowDiagrams === 'function');
  if (hasDiagramRefit) {
    await page.evaluate(() => window.__refitAllContextFlowDiagrams?.());
  }

  await page.waitForTimeout(600);
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(400);
  await page.evaluate(() => {
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(200);
}

async function rasterizeDiagrams(page) {
  const diagrams = await page.locator('.context-flow-diagram').all();

  for (const diagram of diagrams) {
    await diagram.scrollIntoViewIfNeeded();
    await page.evaluate(() => window.__refitAllContextFlowDiagrams?.());
    await page.waitForTimeout(800);

    const layout = await diagram.evaluate((element) => {
      const containerRect = element.getBoundingClientRect();
      const nodeElements = element.querySelectorAll('.react-flow__node');

      if (nodeElements.length === 0) {
        return {
          containerWidth: containerRect.width,
          clip: { x: 0, y: 0, width: containerRect.width, height: containerRect.height },
        };
      }

      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      nodeElements.forEach((node) => {
        const rect = node.getBoundingClientRect();
        minX = Math.min(minX, rect.left);
        minY = Math.min(minY, rect.top);
        maxX = Math.max(maxX, rect.right);
        maxY = Math.max(maxY, rect.bottom);
      });

      const padding = 24;

      return {
        containerWidth: containerRect.width,
        clip: {
          x: Math.max(0, minX - containerRect.left - padding),
          y: Math.max(0, minY - containerRect.top - padding),
          width: Math.min(containerRect.width, maxX - minX + padding * 2),
          height: Math.min(containerRect.height, maxY - minY + padding * 2),
        },
      };
    });

    const screenshot = await diagram.screenshot({
      type: 'png',
      animations: 'disabled',
      clip: layout.clip,
    });
    const dataUrl = `data:image/png;base64,${screenshot.toString('base64')}`;
    const displayHeight = Math.ceil((layout.clip.height / layout.clip.width) * layout.containerWidth);

    await diagram.evaluate(
      (element, { url, displayHeight }) => {
        element.replaceChildren();
        const img = document.createElement('img');
        img.src = url;
        img.alt = 'Diagrama de flujo';
        img.style.cssText = `display:block;width:100%;height:${displayHeight}px;object-fit:fill;`;
        element.appendChild(img);
        element.classList.add('context-flow-diagram--static');
        element.style.height = `${displayHeight}px`;
        element.style.minHeight = `${displayHeight}px`;
        element.style.overflow = 'visible';
        element.style.background = 'transparent';
      },
      { url: dataUrl, displayHeight },
    );

    await diagram.locator('img').evaluate((img) =>
      img.complete
        ? undefined
        : new Promise((resolve, reject) => {
            img.onload = () => resolve(undefined);
            img.onerror = () => reject(new Error('Diagram image failed to load'));
          }),
    );
  }
}

async function exportPdf() {
  const { slug, outputPath, previewUrl } = getExportConfig();

  if (!process.env.SKIP_BUILD) {
    await new Promise((resolve, reject) => {
      const build = spawn('npm', ['run', 'build'], { cwd: rootDir, stdio: 'inherit' });
      build.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`build failed with code ${code}`))));
    });
  }

  const preview = startPreviewServer();

  try {
    await waitForServer(previewUrl);

    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage({
      viewport: A4_VIEWPORT,
      deviceScaleFactor: 2,
    });

    await page.goto(previewUrl, { waitUntil: 'networkidle', timeout: 60_000 });
    await page.waitForSelector('main', { timeout: 15_000 });

    const diagramCount = await page.locator('.context-flow-diagram').count();
    if (diagramCount > 0) {
      await page.waitForTimeout(1000);
    }

    await preparePageForPdf(page);

    if (diagramCount > 0) {
      await rasterizeDiagrams(page);
    }

    await page.emulateMedia({ media: 'screen' });

    await page.pdf({
      path: outputPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: false,
      tagged: false,
      margin: { top: '10mm', right: '8mm', bottom: '10mm', left: '8mm' },
    });

    await browser.close();
    console.log(`PDF generated: ${outputPath}`);
  } finally {
    preview.kill('SIGTERM');
  }
}

exportPdf().catch((error) => {
  console.error(error);
  process.exit(1);
});
