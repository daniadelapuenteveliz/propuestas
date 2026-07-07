import {
  Activity,
  Bot,
  Globe,
  HardDrive,
  Lock,
  Mail,
  Route,
  Server,
  ShieldCheck,
  Sparkles,
  Unplug,
  Video,
  type LucideIcon,
} from 'lucide-react';
import type { PackageBlock } from './config';

const featureIcons: Record<PackageBlock['features'][number]['icon'], LucideIcon> = {
  drive: HardDrive,
  mail: Mail,
  gemini: Sparkles,
  geminiApp: Bot,
  meet: Video,
  shield: ShieldCheck,
  globe: Globe,
  route: Route,
  ssl: Lock,
  uptime: Activity,
  server: Server,
  webhook: Unplug,
};

type PackageBreakdownSectionProps = {
  title: string;
  blocks: PackageBlock[];
};

export default function PackageBreakdownSection({ title, blocks }: PackageBreakdownSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-foreground">{title}</h2>

      <div className="space-y-6">
        {blocks.map((block) => (
          <article
            key={block.heading}
            className="package-breakdown-card overflow-hidden rounded-2xl border border-primary/20 bg-card/90 shadow-sm backdrop-blur-sm"
          >
            <div className="border-b border-primary/10 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent px-5 py-4 sm:px-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-foreground">{block.heading}</h3>
                {block.priceLabel ? (
                  <span className="inline-flex w-fit items-center rounded-full border border-primary/25 bg-background/80 px-3 py-1 text-sm font-semibold text-primary shadow-sm">
                    {block.priceLabel}
                  </span>
                ) : null}
              </div>
            </div>

            <div className="space-y-5 px-5 py-5 sm:px-6 sm:py-6">
              {block.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}

              {block.referenceLink ? (
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {block.referenceLink.prefix}
                  <a
                    href={block.referenceLink.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                  >
                    {block.referenceLink.label}
                  </a>
                  .
                </p>
              ) : null}

              <div className="grid gap-3 sm:grid-cols-2">
                {block.features.map((feature) => {
                  const Icon = featureIcons[feature.icon];

                  return (
                    <div
                      key={feature.title}
                      className="flex gap-3 rounded-xl border border-border/70 bg-background/70 p-4 transition-colors hover:border-primary/30 hover:bg-background"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="min-w-0 space-y-1">
                        <p className="font-medium leading-snug text-foreground">{feature.title}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
