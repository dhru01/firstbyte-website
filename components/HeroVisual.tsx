"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { ByteMotif } from "./ByteMotif";
import { cn } from "@/lib/cn";

const nodes = [
  {
    label: "Input",
    detail: "Enquiry",
    depth: 8,
    className: "left-[2%] top-[3%] w-[48%]",
  },
  {
    label: "AI",
    detail: "Classify",
    depth: 14,
    className: "right-[2%] top-[24%] w-[46%]",
    accent: true,
  },
  {
    label: "Automation",
    detail: "Route",
    depth: 10,
    className: "left-[2%] top-[50%] w-[52%]",
  },
  {
    label: "Output",
    detail: "Deliver",
    depth: 12,
    className: "right-[2%] top-[74%] w-[50%]",
  },
] as const;

type Side = "left" | "right" | "top" | "bottom";

const links: Array<{ from: number; to: number; start: Side; end: Side; bend: "h" | "vh" }> = [
  { from: 0, to: 1, start: "right", end: "left", bend: "h" },
  { from: 1, to: 2, start: "bottom", end: "right", bend: "vh" },
  { from: 2, to: 3, start: "bottom", end: "left", bend: "vh" },
];

function anchor(rect: DOMRect, container: DOMRect, side: Side) {
  const x = rect.left - container.left;
  const y = rect.top - container.top;

  switch (side) {
    case "left":
      return { x, y: y + rect.height / 2 };
    case "right":
      return { x: x + rect.width, y: y + rect.height / 2 };
    case "top":
      return { x: x + rect.width / 2, y };
    case "bottom":
      return { x: x + rect.width / 2, y: y + rect.height };
  }
}

function route(
  start: { x: number; y: number },
  end: { x: number; y: number },
  bend: "h" | "vh",
) {
  const sx = Math.round(start.x);
  const sy = Math.round(start.y);
  const ex = Math.round(end.x);
  const ey = Math.round(end.y);

  if (bend === "vh") return `M ${sx} ${sy} V ${ey} H ${ex}`;

  const midX = Math.round((sx + ex) / 2);
  return `M ${sx} ${sy} H ${midX} V ${ey} H ${ex}`;
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const uid = useId().replace(/:/g, "");
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [paths, setPaths] = useState<string[]>([]);
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const packets = mounted && reduce === false;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const update = () => {
      const bounds = container.getBoundingClientRect();
      const next = links.map((link) => {
        const from = nodeRefs.current[link.from];
        const to = nodeRefs.current[link.to];
        if (!from || !to) return "";
        return route(
          anchor(from.getBoundingClientRect(), bounds, link.start),
          anchor(to.getBoundingClientRect(), bounds, link.end),
          link.bend,
        );
      });
      setPaths(next);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(container);
    nodeRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !window.matchMedia("(pointer: fine)").matches) return;

    const move = (event: PointerEvent) => {
      const bounds = container.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;
      nodeRefs.current.forEach((node, index) => {
        if (!node) return;
        const depth = nodes[index].depth;
        node.style.transition = "none";
        node.style.transform = `translate3d(${(px * depth).toFixed(2)}px, ${(py * depth).toFixed(2)}px, 0)`;
      });
    };

    const leave = () => {
      nodeRefs.current.forEach((node) => {
        if (!node) return;
        node.style.transition = "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)";
        node.style.transform = "translate3d(0, 0, 0)";
      });
    };

    container.addEventListener("pointermove", move);
    container.addEventListener("pointerleave", leave);
    return () => {
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <figure className="relative">
      <figcaption className="sr-only">
        A system flow from input, through AI and automation, to an output.
      </figcaption>

      <ol className="relative md:hidden">
        <span className="absolute bottom-3 left-[5px] top-2 w-px bg-white/10" aria-hidden />
        <span className="packet-travel absolute left-[2px] top-0 h-1.5 w-1.5 rounded-full bg-accent-2" aria-hidden />
        {nodes.map((node) => (
          <li key={node.label} className="relative pb-5 pl-8 last:pb-0">
            <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-accent/70 bg-bg" />
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">
              {node.label}
            </p>
            <p className="mt-1 text-sm text-ink">{node.detail}</p>
          </li>
        ))}
      </ol>

      <div ref={containerRef} className="relative hidden h-[440px] md:block lg:h-[520px]">
        <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden>
          {paths.map((path, index) =>
            path ? (
              <g key={links[index].from}>
                <path d={path} fill="none" stroke="rgba(23,105,255,0.18)" strokeWidth="5" />
                <path
                  id={`${uid}-flow-${index}`}
                  d={path}
                  fill="none"
                  stroke="rgba(158,192,255,0.85)"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                {packets ? (
                  <circle r="2.2" fill="#e7f0ff">
                    <animateMotion
                      dur={`${3.2 + index * 0.45}s`}
                      repeatCount="indefinite"
                      begin={`${index * 0.55}s`}
                    >
                      <mpath href={`#${uid}-flow-${index}`} />
                    </animateMotion>
                  </circle>
                ) : null}
              </g>
            ) : null,
          )}
        </svg>

        {nodes.map((node, index) => (
          <div
            key={node.label}
            ref={(element) => {
              nodeRefs.current[index] = element;
            }}
            className={cn(
              "absolute rounded-xl border bg-[#070b14]/95 px-4 py-3.5 shadow-[0_20px_50px_-32px_rgba(23,105,255,0.8)]",
              "accent" in node && node.accent ? "border-accent/40" : "border-white/10",
              node.className,
            )}
          >
            <span className="pointer-events-none absolute inset-1.5" aria-hidden>
              <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-accent/70" />
              <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-accent/70" />
              <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-accent/40" />
              <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-accent/40" />
            </span>
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">
                {node.label}
              </p>
              {node.label === "AI" ? <ByteMotif /> : null}
            </div>
            <p className="mt-2 text-sm text-ink">{node.detail}</p>
          </div>
        ))}
      </div>
    </figure>
  );
}
