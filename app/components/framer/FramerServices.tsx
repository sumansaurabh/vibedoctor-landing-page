import { useEffect, useMemo, useState } from "react";
import {
  Background,
  Edge,
  Handle,
  MarkerType,
  Node,
  NodeTypes,
  NodeProps,
  Position,
  ReactFlow,
} from "@xyflow/react";
import { useInView } from "react-intersection-observer";
import "@xyflow/react/dist/style.css";

type PipelineNodeData = {
  active: boolean;
  body: string;
  compact?: boolean;
  label: string;
  title: string;
};

type PipelineFlowNode = Node<PipelineNodeData, "pipelineNode">;

function PipelineNode({ data }: NodeProps<PipelineFlowNode>) {
  const baseCard =
    "relative overflow-hidden rounded-xl border backdrop-blur-sm transition-all duration-500";
  const activeCard =
    "border-cyan-300/35 bg-white/[0.05] shadow-[0_0_34px_rgba(103,232,249,0.14)]";
  const idleCard = "border-white/[0.08] bg-white/[0.03]";

  return (
    <div className={data.compact ? "w-[210px]" : "w-[260px]"}>
      <Handle
        id="target-left"
        type="target"
        position={Position.Left}
        className="!h-2 !w-2 !border-0 !bg-transparent !opacity-0"
      />
      <Handle
        id="target-top"
        type="target"
        position={Position.Top}
        className="!h-2 !w-2 !border-0 !bg-transparent !opacity-0"
      />
      <Handle
        id="target-bottom"
        type="target"
        position={Position.Bottom}
        className="!h-2 !w-2 !border-0 !bg-transparent !opacity-0"
      />

      <div className={`${baseCard} ${data.active ? activeCard : idleCard}`}>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(65%_80%_at_78%_10%,rgba(103,232,249,0.12)_0%,rgba(4,7,13,0)_75%)]" />

        <div className="relative z-[1] space-y-2 p-4">
          <span
            className={`inline-flex rounded-full px-2 py-0.5 text-[13px] font-medium uppercase tracking-[0.09em] ${
              data.active
                ? "border border-cyan-300/30 bg-cyan-300/10 text-cyan-200"
                : "border border-white/15 bg-white/[0.04] text-white/55"
            }`}
          >
            {data.label}
          </span>

          <h3 className="text-[20px] font-medium leading-[1.25] tracking-[-0.01em] text-[#e4e9f2]">
            {data.title}
          </h3>
          <p className="whitespace-pre-line text-[17px] leading-[1.45] text-white/55">
            {data.body}
          </p>
        </div>
      </div>

      <Handle
        id="source-right"
        type="source"
        position={Position.Right}
        className="!h-2 !w-2 !border-0 !bg-transparent !opacity-0"
      />
      <Handle
        id="source-bottom"
        type="source"
        position={Position.Bottom}
        className="!h-2 !w-2 !border-0 !bg-transparent !opacity-0"
      />
    </div>
  );
}

const nodeTypes: NodeTypes = { pipelineNode: PipelineNode };

const activationByEdge: Record<string, number> = {
  "edge-prompt-cloud": 1,
  "edge-cloud-connect": 2,
  "edge-connect-live": 3,
  "edge-cloud-redis": 1,
  "edge-redis-connect": 2,
};

function edgeFor(
  id: string,
  source: string,
  target: string,
  activeStep: number,
  label?: string,
): Edge {
  const isActive = activeStep >= (activationByEdge[id] ?? 99);
  const stroke = isActive
    ? "rgba(103, 232, 249, 0.62)"
    : "rgba(255, 255, 255, 0.15)";

  return {
    id,
    source,
    target,
    animated: isActive,
    type: "smoothstep",
    className: isActive ? "flow-edge-active" : "flow-edge-idle",
    label,
    labelStyle: {
      fill: isActive
        ? "rgba(186, 230, 253, 0.95)"
        : "rgba(213, 219, 230, 0.68)",
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: "0.03em",
      textTransform: "uppercase",
    },
    labelBgPadding: [9, 5],
    labelBgBorderRadius: 999,
    labelBgStyle: {
      fill: isActive ? "rgba(8, 18, 26, 0.9)" : "rgba(8, 12, 20, 0.76)",
      stroke: isActive
        ? "rgba(103, 232, 249, 0.45)"
        : "rgba(216, 231, 242, 0.2)",
      strokeWidth: 1,
    },
    style: {
      stroke,
      strokeWidth: isActive ? 2.1 : 1.4,
      strokeDasharray: isActive ? "8 6" : "4 8",
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 16,
      height: 16,
      color: stroke,
    },
  };
}

function connectorEdgeFor(
  id: string,
  source: string,
  target: string,
  activeStep: number,
  sourceHandle?: string,
  targetHandle?: string,
): Edge {
  const isActive = activeStep >= (activationByEdge[id] ?? 99);
  const stroke = isActive
    ? "rgba(103, 232, 249, 0.72)"
    : "rgba(255, 255, 255, 0.18)";

  return {
    id,
    source,
    target,
    sourceHandle,
    targetHandle,
    animated: isActive,
    type: "straight",
    className: isActive ? "flow-edge-active" : "flow-edge-idle",
    style: {
      stroke,
      strokeWidth: isActive ? 2.5 : 1.8,
      strokeDasharray: isActive ? "1 8" : "1 10",
      strokeLinecap: "round",
    },
    markerEnd: {
      type: MarkerType.Arrow,
      width: 0,
      height: 0,
      color: "transparent",
    },
    markerStart: {
      type: MarkerType.Arrow,
      width: 0,
      height: 0,
      color: "transparent",
    },
  };
}

export function FramerServices() {
  const interFamily = '"Inter", "Inter Placeholder", sans-serif';
  const serifFamily =
    '"Instrument Serif", "Instrument Serif Placeholder", serif';

  const [activeStep, setActiveStep] = useState(-1);
  const { ref, inView } = useInView({ threshold: 0.35, triggerOnce: false });

  useEffect(() => {
    if (!inView) {
      setActiveStep(-1);
      return;
    }

    setActiveStep(0);
    let step = 0;
    const timer = window.setInterval(() => {
      step += 1;
      if (step > 3) {
        window.clearInterval(timer);
        return;
      }
      setActiveStep(step);
    }, 650);

    return () => window.clearInterval(timer);
  }, [inView]);

  const nodes = useMemo<PipelineFlowNode[]>(
    () => [
      {
        id: "prompt",
        type: "pipelineNode",
        position: { x: 0, y: 95 },
        data: {
          active: activeStep >= 0,
          label: "Prompt",
          title: '"Add OTP verification to signup"',
          body: "Natural-language request",
        },
      },
      {
        id: "cloud",
        type: "pipelineNode",
        position: { x: 340, y: 95 },
        data: {
          active: activeStep >= 1,
          label: "Cloud Spawn",
          title: "Provision services",
          body: "Creates Redis + app runtime\nin your cloud account",
        },
      },
      {
        id: "connect",
        type: "pipelineNode",
        position: { x: 680, y: 95 },
        data: {
          active: activeStep >= 2,
          label: "Auto-Connect",
          title: "Wire infra to app",
          body: "Inject env vars\nAttach service bindings",
        },
      },
      {
        id: "live",
        type: "pipelineNode",
        position: { x: 1020, y: 95 },
        data: {
          active: activeStep >= 3,
          label: "Live & Done",
          title: "Production release",
          body: "OTP flow is live\nRollback-ready deploy",
        },
      },
      {
        id: "redis",
        type: "pipelineNode",
        position: { x: 550, y: 310 },
        data: {
          active: activeStep >= 1,
          compact: true,
          label: "Data",
          title: "Redis Instance",
          body: "memorystore 6.x",
        },
      },
    ],
    [activeStep],
  );

  const edges = useMemo<Edge[]>(
    () => [
      edgeFor(
        "edge-prompt-cloud",
        "prompt",
        "cloud",
        activeStep,
        "",
      ),
      edgeFor("edge-cloud-connect", "cloud", "connect", activeStep),
      edgeFor("edge-connect-live", "connect", "live", activeStep),
      connectorEdgeFor(
        "edge-cloud-redis",
        "cloud",
        "redis",
        activeStep,
        "source-bottom",
        "target-left",
      ),
      connectorEdgeFor(
        "edge-redis-connect",
        "redis",
        "connect",
        activeStep,
        "source-right",
        "target-bottom",
      ),
    ],
    [activeStep],
  );

  const mobileSteps = [
    {
      active: activeStep >= 0,
      title: "Prompt",
      description: '"Add OTP verification to signup"',
    },
    {
      active: activeStep >= 1,
      title: "Cloud Spawn",
      description: "Analyze intent, then provision app runtime and Redis.",
    },
    {
      active: activeStep >= 2,
      title: "Auto-Connect",
      description: "Wires services, env vars, and app integration.",
    },
    {
      active: activeStep >= 3,
      title: "Live & Done",
      description: "Staged release complete. OTP flow is production-ready.",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#04070d] py-24 sm:py-[100px]"
      id="services"
    >
      <style>{`
        .byoc-flow .react-flow__attribution { display: none; }
        .byoc-flow .react-flow__pane { cursor: default; }
        .byoc-flow .react-flow__edge-path {
          transition: stroke 280ms ease, stroke-width 280ms ease;
        }
        .byoc-flow .flow-edge-active .react-flow__edge-path {
          animation: byoc-dash 1.2s linear infinite;
        }
        @keyframes byoc-dash {
          to { stroke-dashoffset: -30; }
        }
        @keyframes dotPulse {
          0%, 20% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 bg-[radial-gradient(50%_50%_at_50%_50%,#d8e7f212_0%,#04070d_100%)]" />
      <div className="pointer-events-none absolute -bottom-[249px] left-1/2 z-[1] h-[499px] w-[793px] -translate-x-1/2 -rotate-[13deg] rounded-[10px] bg-[radial-gradient(50%_50%_at_50%_50%,#d5dbe6b3_0%,#04070d00_100%)] opacity-10" />

      <div className="relative z-[2] mx-auto flex w-full max-w-[1200px] flex-col items-center gap-11 px-6 sm:px-10">
        <div className="flex w-full max-w-[820px] flex-col items-center gap-6 text-center">
          <div
            className="inline-flex items-center gap-2 rounded-[60px] px-3 py-1.5"
            style={{
              backgroundColor: "#04070d",
              border: "1px solid rgba(216, 231, 242, 0.07)",
            }}
          >
            <span
              className="text-[16px] uppercase text-[#d5dbe6]"
              style={{
                fontFamily: interFamily,
                fontSize: "16px",
                lineHeight: "1.3em",
                letterSpacing: "0em",
                fontWeight: 400,
              }}
            >
              LIVE PIPELINE
            </span>
          </div>

          <h2
            className="text-[36px] font-medium leading-[1.2] tracking-[-0.02em] text-transparent sm:text-[48px]"
            style={{
              fontFamily: interFamily,
              backgroundImage:
                "linear-gradient(161deg, rgb(213, 219, 230) 51.657657657657666%, rgb(4, 7, 13) 166%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Tell us once. We ship it{" "}
            <span
              className="font-normal italic"
              style={{ fontFamily: serifFamily }}
            >
              in your cloud.
            </span>
          </h2>

          <p
            className="max-w-[720px] text-[20px] leading-[1.6] tracking-[-0.02em] text-[rgba(213,219,230,0.6)]"
            style={{ fontFamily: interFamily }}
          >
            You describe the change in plain English. Our agent plans the work,
            provisions infrastructure, wires integrations, and ships a safer
            production release.
          </p>
        </div>

        <div
          ref={ref}
          className="w-full rounded-[20px] border border-[rgba(216,231,242,0.07)] bg-[#04070d] p-4 sm:p-5"
        >
          <div className="space-y-4 rounded-[14px] border border-[rgba(216,231,242,0.08)] bg-white/[0.02] p-5">
            {/* Chat Header */}
            <div className="flex items-center gap-2 border-b border-[rgba(216,231,242,0.06)] pb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-500/20 ring-1 ring-cyan-300/30">
                <svg className="h-4 w-4 text-cyan-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p
                  className="text-[13px] font-medium text-[#d5dbe6]"
                  style={{ fontFamily: interFamily }}
                >
                  You
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.08em] text-[rgba(213,219,230,0.45)]"
                  style={{ fontFamily: interFamily }}
                >
                  User Request
                </p>
              </div>
            </div>

            {/* Chat Message Bubble */}
            <div className="flex gap-3">
              <div className="flex-1">
                <div className="rounded-2xl rounded-tl-sm border border-[rgba(216,231,242,0.12)] bg-white/[0.04] px-4 py-3 shadow-sm">
                  <p
                    className="text-[19px] leading-relaxed text-[#d5dbe6]"
                    style={{ fontFamily: interFamily }}
                  >
                    Add OTP verification to my signup flow
                    <span className="ml-1 inline-flex gap-0.5">
                      <span className="text-cyan-300" style={{ animation: 'dotPulse 1.4s ease-in-out 0s infinite' }}>.</span>
                      <span className="text-cyan-300" style={{ animation: 'dotPulse 1.4s ease-in-out 0.2s infinite' }}>.</span>
                      <span className="text-cyan-300" style={{ animation: 'dotPulse 1.4s ease-in-out 0.4s infinite' }}>.</span>
                    </span>
                  </p>
                </div>
                <p
                  className="mt-1.5 text-[12px] text-[rgba(213,219,230,0.4)]"
                  style={{ fontFamily: interFamily }}
                >
                  Just now
                </p>
              </div>
            </div>

            {/* Typing Indicator */}
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 ring-1 ring-cyan-300/40">
                <svg className="h-3.5 w-3.5 text-cyan-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5.5-2.5l7.51-3.49L17.5 6.5 9.99 9.99 6.5 17.5zm5.5-6.6c.61 0 1.1.49 1.1 1.1s-.49 1.1-1.1 1.1-1.1-.49-1.1-1.1.49-1.1 1.1-1.1z"/>
                </svg>
              </div>
              <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300" />
                  <span
                    className="text-[13px] font-medium tracking-[0.05em] text-cyan-200"
                    style={{ fontFamily: interFamily }}
                  >
                    Agent is working
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 hidden md:block">
            <div className="byoc-flow h-[430px] w-full overflow-hidden rounded-[14px] border border-[rgba(216,231,242,0.08)] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] [background-size:24px_24px]">
              <ReactFlow
                nodes={nodes}
                edges={edges}
                nodeTypes={nodeTypes}
                fitView={true}
                fitViewOptions={{ padding: 0.05 }}
                nodesDraggable={false}
                nodesConnectable={false}
                elementsSelectable={false}
                panOnDrag={false}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                preventScrolling={false}
                proOptions={{ hideAttribution: true }}
              >
                <Background
                  gap={24}
                  size={1}
                  color="rgba(255, 255, 255, 0.05)"
                />
              </ReactFlow>
            </div>
          </div>

          <div className="mt-4 space-y-3 md:hidden">
            {mobileSteps.map((step) => (
              <div
                key={step.title}
                className={`rounded-xl border p-4 transition-all ${
                  step.active
                    ? "border-cyan-300/35 bg-white/[0.05]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <h3 className="text-[18px] font-medium text-[#e4e9f2]">
                  {step.title}
                </h3>
                <p className="mt-1 text-[17px] leading-[1.45] text-white/55">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {[
              "GCP Cloud Run",
              "AWS Lambda",
              "Azure Functions",
              "Your BYOC",
            ].map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-[rgba(216,231,242,0.16)] bg-white/[0.02] px-3 py-1.5 text-[15px] uppercase tracking-[0.08em] text-[rgba(213,219,230,0.78)] transition-colors hover:border-cyan-300/30 hover:text-cyan-200"
                style={{ fontFamily: interFamily }}
              >
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-1 text-center">
          <p
            className="text-[24px] font-medium tracking-[-0.02em] text-[#d5dbe6]"
            style={{ fontFamily: interFamily }}
          >
            Your infrastructure. Your cloud. Our automation.
          </p>
          <p
            className="text-[18px] text-[rgba(213,219,230,0.58)]"
            style={{ fontFamily: interFamily }}
          >
            We provision, connect, and deploy - you keep full ownership and
            control.
          </p>
        </div>
      </div>
    </section>
  );
}
