import { Bot, ClipboardList, Scale, User, Wrench } from 'lucide-react';
import { memo, useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import ReactFlow, {
  BaseEdge,
  Handle,
  MarkerType,
  Position,
  ReactFlowProvider,
  getNodesBounds,
  useEdgesState,
  useNodesState,
  type Edge,
  type EdgeProps,
  type Node,
  type NodeProps,
  type ReactFlowInstance,
} from 'reactflow';
import { cn } from '../../lib/utils';
import 'reactflow/dist/style.css';

type FlowNodeData = {
  label: string;
  icon: React.ReactNode;
  iconClassName?: string;
  secondaryIcon?: React.ReactNode;
  secondaryIconClassName?: string;
  hideTarget?: boolean;
  hideSource?: boolean;
  hideHandles?: boolean;
  showLoopHandles?: boolean;
  verticalLoopHandles?: 'top' | 'bottom';
};

export type ContextFlowDiagramVariant = 'manual' | 'kheprion';

const NODE_WIDTH = 156;
const MIN_GAP = 20;
const MAX_GAP = 88;
const HUMAN_OFFSET = 28;
const PLACEHOLDER_OFFSET = 148;
const handleClass = '!h-2 !w-2 !border-2 !border-background !bg-primary';
const workerIcon = <User className="h-5 w-5" />;
const workerIconClassName = 'bg-primary/10 text-primary';
const agentIcon = <Bot className="h-5 w-5" />;
const agentIconClassName = 'bg-primary/15 text-primary';
const legalIcon = <Scale className="h-5 w-5" />;
const legalIconClassName = 'bg-primary/10 text-primary';
const toolIcon = <Wrench className="h-5 w-5" />;
const toolIconClassName = 'bg-primary/15 text-primary';

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const FlowNode = memo(({ data, selected }: NodeProps<FlowNodeData>) => (
  <div
    className={cn(
      'flex cursor-pointer flex-col items-center gap-1.5 rounded-xl border bg-card px-2 py-2.5 text-center shadow-sm transition-all',
      selected
        ? 'border-primary ring-2 ring-primary/30 shadow-md'
        : 'border-border/70 hover:border-primary/40 hover:shadow-md',
    )}
    style={{ width: NODE_WIDTH }}
  >
    {!data.hideHandles && !data.hideTarget && (
      <Handle type="target" position={Position.Left} className={handleClass} />
    )}
    {!data.hideHandles &&
      (data.showLoopHandles ? (
        <>
          <Handle
            id="loop-in"
            type="target"
            position={Position.Top}
            className={handleClass}
            style={{ left: '70%' }}
          />
          <Handle
            id="loop-out"
            type="source"
            position={Position.Top}
            className={handleClass}
            style={{ left: '30%' }}
          />
        </>
      ) : data.verticalLoopHandles === 'top' ? (
        <>
          <Handle
            id="top-in"
            type="target"
            position={Position.Top}
            className={handleClass}
            style={{ left: '62%' }}
          />
          <Handle
            id="top-out"
            type="source"
            position={Position.Top}
            className={handleClass}
            style={{ left: '38%' }}
          />
        </>
      ) : data.verticalLoopHandles === 'bottom' ? (
        <>
          <Handle
            id="bottom-in"
            type="target"
            position={Position.Bottom}
            className={handleClass}
            style={{ left: '38%' }}
          />
          <Handle
            id="bottom-out"
            type="source"
            position={Position.Bottom}
            className={handleClass}
            style={{ left: '62%' }}
          />
        </>
      ) : (
        !data.hideSource && <Handle type="source" position={Position.Right} className={handleClass} />
      ))}

    <div className="flex items-center gap-1.5">
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${data.iconClassName ?? 'bg-primary/10 text-primary'}`}
      >
        {data.icon}
      </div>
      {data.secondaryIcon ? (
        <div
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${data.secondaryIconClassName ?? data.iconClassName ?? 'bg-primary/10 text-primary'}`}
        >
          {data.secondaryIcon}
        </div>
      ) : null}
    </div>
    <p className="flex min-h-10 items-center justify-center text-xs font-medium leading-snug text-foreground">
      {data.label}
    </p>
  </div>
));

FlowNode.displayName = 'FlowNode';

const LOOP_OFFSET = 56;

const RoundLoopEdge = memo(
  ({ id, sourceX, sourceY, targetX, targetY, label, labelStyle, markerEnd, style }: EdgeProps) => {
    const labelX = (sourceX + targetX) / 2;
    const controlY = Math.min(sourceY, targetY) - LOOP_OFFSET;
    const labelY = controlY + 6;
    const path = `M ${sourceX} ${sourceY} Q ${labelX} ${controlY} ${targetX} ${targetY}`;

    return (
      <BaseEdge
        id={id}
        path={path}
        labelX={labelX}
        labelY={labelY}
        label={label}
        labelStyle={labelStyle}
        labelShowBg={false}
        markerEnd={markerEnd}
        style={style}
        interactionWidth={28}
      />
    );
  },
);

RoundLoopEdge.displayName = 'RoundLoopEdge';

const nodeTypes = { flowNode: FlowNode };
const edgeTypes = { roundLoop: RoundLoopEdge };

function computeGap(containerWidth: number) {
  const entryColumnX = Math.max(12, containerWidth * 0.02);
  const workerNodes = 3;
  const totalNodesWidth = NODE_WIDTH * (1 + workerNodes);
  const availableGapSpace = containerWidth - entryColumnX - totalNodesWidth - 16;
  return Math.max(MIN_GAP, Math.min(MAX_GAP, availableGapSpace / workerNodes));
}

function buildEntryNodes(entryColumnX: number): Node<FlowNodeData>[] {
  return [
    {
      id: 'instagram',
      type: 'flowNode',
      position: { x: entryColumnX, y: 16 },
      data: {
        label: 'Cliente contacta',
        hideTarget: true,
        icon: <InstagramIcon className="h-5 w-5" />,
        iconClassName: 'bg-gradient-to-br from-pink-500/25 to-purple-500/25 text-pink-600',
      },
    },
    {
      id: 'whatsapp',
      type: 'flowNode',
      position: { x: entryColumnX, y: 150 },
      data: {
        label: 'Cliente contacta',
        hideTarget: true,
        icon: <WhatsAppIcon className="h-5 w-5 text-emerald-600" />,
        iconClassName: 'bg-emerald-500/15 text-emerald-600',
      },
    },
  ];
}

function buildManualNodes(containerWidth: number): Node<FlowNodeData>[] {
  const entryColumnX = Math.max(12, containerWidth * 0.02);
  const gap = computeGap(containerWidth);
  const flowRowY = 96;
  const respondX = entryColumnX + NODE_WIDTH + gap + HUMAN_OFFSET;
  const classifyX = respondX + NODE_WIDTH + gap;
  const manageX = classifyX + NODE_WIDTH + gap;

  return [
    ...buildEntryNodes(entryColumnX),
    {
      id: 'lawyer-respond',
      type: 'flowNode',
      position: { x: respondX, y: flowRowY },
      data: {
        label: 'Abogado responde y crea ticket',
        icon: workerIcon,
        iconClassName: workerIconClassName,
      },
    },
    {
      id: 'lawyer-classify',
      type: 'flowNode',
      position: { x: classifyX, y: flowRowY },
      data: {
        label: 'Abogado clasifica el caso',
        icon: <ClipboardList className="h-5 w-5" />,
        iconClassName: 'bg-primary/10 text-primary',
      },
    },
    {
      id: 'manage-cause',
      type: 'flowNode',
      position: { x: manageX, y: flowRowY },
      data: {
        label: 'Va completando y gestionando la causa',
        showLoopHandles: true,
        icon: workerIcon,
        iconClassName: workerIconClassName,
      },
    },
  ];
}

function buildKheprionNodes(containerWidth: number): Node<FlowNodeData>[] {
  const entryColumnX = Math.max(12, containerWidth * 0.02);
  const gap = computeGap(containerWidth);
  const flowRowY = 96;
  const agentTicketX = entryColumnX + NODE_WIDTH + gap;
  const humanQuestionsX = agentTicketX + NODE_WIDTH + gap;
  const workCauseX = humanQuestionsX + NODE_WIDTH + gap;

  return [
    ...buildEntryNodes(entryColumnX),
    {
      id: 'agent-ticket',
      type: 'flowNode',
      position: { x: agentTicketX, y: flowRowY },
      data: {
        label: 'Agente abre un ticket',
        icon: agentIcon,
        iconClassName: agentIconClassName,
      },
    },
    {
      id: 'human-questions',
      type: 'flowNode',
      position: { x: humanQuestionsX, y: flowRowY },
      data: {
        label: 'Trabajador toma el ticket con el agente',
        icon: workerIcon,
        iconClassName: workerIconClassName,
        secondaryIcon: agentIcon,
        secondaryIconClassName: agentIconClassName,
      },
    },
    {
      id: 'cause-placeholder',
      type: 'flowNode',
      position: { x: workCauseX, y: flowRowY - PLACEHOLDER_OFFSET },
      data: {
        label: 'Herramientas de automatización',
        icon: legalIcon,
        iconClassName: legalIconClassName,
        secondaryIcon: toolIcon,
        secondaryIconClassName: toolIconClassName,
        hideTarget: true,
        hideSource: true,
        verticalLoopHandles: 'bottom',
      },
    },
    {
      id: 'work-cause',
      type: 'flowNode',
      position: { x: workCauseX, y: flowRowY },
      data: {
        label: 'En conjunto trabajan en la causa',
        icon: workerIcon,
        iconClassName: workerIconClassName,
        secondaryIcon: agentIcon,
        secondaryIconClassName: agentIconClassName,
        hideSource: true,
        verticalLoopHandles: 'top',
      },
    },
  ];
}

function buildNodes(containerWidth: number, variant: ContextFlowDiagramVariant): Node<FlowNodeData>[] {
  return variant === 'manual'
    ? buildManualNodes(containerWidth)
    : buildKheprionNodes(containerWidth);
}

const edgeDefaults = {
  animated: true,
  interactionWidth: 28,
  markerEnd: { type: MarkerType.ArrowClosed },
  style: { strokeWidth: 2, stroke: 'hsl(var(--primary))', cursor: 'pointer' },
};

const manualEdges: Edge[] = [
  { id: 'instagram-respond', source: 'instagram', target: 'lawyer-respond', ...edgeDefaults },
  { id: 'whatsapp-respond', source: 'whatsapp', target: 'lawyer-respond', ...edgeDefaults },
  { id: 'respond-classify', source: 'lawyer-respond', target: 'lawyer-classify', ...edgeDefaults },
  { id: 'classify-manage', source: 'lawyer-classify', target: 'manage-cause', ...edgeDefaults },
  {
    id: 'manage-loop',
    source: 'manage-cause',
    target: 'manage-cause',
    sourceHandle: 'loop-out',
    targetHandle: 'loop-in',
    type: 'roundLoop',
    label: 'Investiga normativa, jurisprudencia y precedentes',
    labelStyle: { fill: 'hsl(var(--muted-foreground))', fontSize: 10, fontWeight: 500, cursor: 'pointer' },
    labelShowBg: false,
    ...edgeDefaults,
  },
];

const kheprionEdges: Edge[] = [
  { id: 'instagram-agent', source: 'instagram', target: 'agent-ticket', ...edgeDefaults },
  { id: 'whatsapp-agent', source: 'whatsapp', target: 'agent-ticket', ...edgeDefaults },
  { id: 'agent-questions', source: 'agent-ticket', target: 'human-questions', ...edgeDefaults },
  { id: 'questions-work', source: 'human-questions', target: 'work-cause', ...edgeDefaults },
  {
    id: 'work-to-placeholder',
    source: 'work-cause',
    target: 'cause-placeholder',
    sourceHandle: 'top-out',
    targetHandle: 'bottom-in',
    ...edgeDefaults,
  },
  {
    id: 'placeholder-to-work',
    source: 'cause-placeholder',
    target: 'work-cause',
    sourceHandle: 'bottom-out',
    targetHandle: 'top-in',
    ...edgeDefaults,
  },
];

function getInitialEdges(variant: ContextFlowDiagramVariant): Edge[] {
  return variant === 'manual' ? manualEdges : kheprionEdges;
}

const diagramRefitCallbacks = new Set<() => void>();

function fitDiagram(instance: ReactFlowInstance, container: HTMLElement | null, animate = false) {
  const isPdfExport = document.documentElement.classList.contains('pdf-export');

  if (isPdfExport && container) {
    const { width, height } = container.getBoundingClientRect();
    const bounds = getNodesBounds(instance.getNodes());
    const zoom = Math.min((width - 16) / bounds.width, (height - 16) / bounds.height, 1.15);
    const x = (width - bounds.width * zoom) / 2 - bounds.x * zoom;
    const y = (height - bounds.height * zoom) / 2 - bounds.y * zoom;

    instance.setViewport({ x, y, zoom }, { duration: animate ? 200 : 0 });
    return;
  }

  instance.fitView({
    padding: 0.08,
    minZoom: 0.15,
    maxZoom: 1,
    duration: animate ? 200 : 0,
  });
}

export function refitAllContextFlowDiagrams() {
  diagramRefitCallbacks.forEach((callback) => callback());
}

if (typeof window !== 'undefined') {
  window.__refitAllContextFlowDiagrams = refitAllContextFlowDiagrams;
}

function ContextFlowDiagramInner({
  containerWidth,
  flowContainerRef,
  variant,
}: {
  containerWidth: number;
  flowContainerRef: RefObject<HTMLDivElement | null>;
  variant: ContextFlowDiagramVariant;
}) {
  const flowRef = useRef<ReactFlowInstance | null>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(buildNodes(containerWidth, variant));
  const [edges, setEdges, onEdgesChange] = useEdgesState(getInitialEdges(variant));

  useEffect(() => {
    setNodes(buildNodes(containerWidth, variant));
    setEdges(getInitialEdges(variant));
    requestAnimationFrame(() => {
      if (flowRef.current) {
        fitDiagram(flowRef.current, flowContainerRef.current, true);
      }
    });
  }, [containerWidth, flowContainerRef, setEdges, setNodes, variant]);

  const onInit = useCallback(
    (instance: ReactFlowInstance) => {
      flowRef.current = instance;
      requestAnimationFrame(() => fitDiagram(instance, flowContainerRef.current));
    },
    [flowContainerRef],
  );

  useEffect(() => {
    const refit = () => {
      if (flowRef.current) {
        fitDiagram(flowRef.current, flowContainerRef.current, false);
      }
    };

    diagramRefitCallbacks.add(refit);
    return () => {
      diagramRefitCallbacks.delete(refit);
    };
  }, [flowContainerRef]);

  const onNodeClick = useCallback(
    (_: React.MouseEvent, node: Node) => {
      onNodesChange(nodes.map((item) => ({ id: item.id, type: 'select', selected: item.id === node.id })));
      onEdgesChange(edges.map((edge) => ({ id: edge.id, type: 'select', selected: false })));
    },
    [edges, nodes, onEdgesChange, onNodesChange],
  );

  const onEdgeClick = useCallback(
    (_: React.MouseEvent, edge: Edge) => {
      onEdgesChange(edges.map((item) => ({ id: item.id, type: 'select', selected: item.id === edge.id })));
      onNodesChange(nodes.map((node) => ({ id: node.id, type: 'select', selected: false })));
    },
    [edges, nodes, onEdgesChange, onNodesChange],
  );

  const onPaneClick = useCallback(() => {
    onNodesChange(nodes.map((node) => ({ id: node.id, type: 'select', selected: false })));
    onEdgesChange(edges.map((edge) => ({ id: edge.id, type: 'select', selected: false })));
  }, [edges, nodes, onEdgesChange, onNodesChange]);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onInit={onInit}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      onEdgeClick={onEdgeClick}
      onPaneClick={onPaneClick}
      proOptions={{ hideAttribution: true }}
      nodesDraggable={false}
      nodesConnectable={false}
      edgesFocusable
      nodesFocusable
      elementsSelectable
      selectNodesOnDrag={false}
      panOnDrag={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
      zoomOnDoubleClick={false}
      preventScrolling={false}
    />
  );
}

export default function ContextFlowDiagram({ variant = 'kheprion' }: { variant?: ContextFlowDiagramVariant }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const flowContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateWidth = () => setContainerWidth(element.clientWidth);

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(element);

    const onPdfExportReady = () => {
      setContainerWidth(element.clientWidth);
      requestAnimationFrame(() => refitAllContextFlowDiagrams());
    };
    window.addEventListener('pdf-export-ready', onPdfExportReady);

    return () => {
      observer.disconnect();
      window.removeEventListener('pdf-export-ready', onPdfExportReady);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="context-flow-diagram relative overflow-hidden h-[clamp(280px,42vw,400px)] w-full min-h-[280px]"
    >
      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full text-primary"
        viewBox="-8 -2 120 104"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon
          points="-8,0 -8,100 112,75 112,25"
          className="fill-primary/[0.08]"
        />
      </svg>

      {containerWidth > 0 && (
        <ReactFlowProvider>
          <div ref={flowContainerRef} className="relative z-10 h-full w-full">
            <ContextFlowDiagramInner
              containerWidth={containerWidth}
              flowContainerRef={flowContainerRef}
              variant={variant}
            />
          </div>
        </ReactFlowProvider>
      )}
    </div>
  );
}
