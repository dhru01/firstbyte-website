"use client";

import { useState } from "react";
import { ChevronDown, ListChecks, MessagesSquare, Receipt, UserRoundSearch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { scaffolds, type Scaffold } from "@/data/scaffolds";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Shell } from "./Shell";

const icons: Record<string, LucideIcon> = {
  support: MessagesSquare,
  collections: Receipt,
  leads: UserRoundSearch,
  operations: ListChecks,
};

export function Scaffolds() {
  const [active, setActive] = useState(scaffolds[0].id);

  return (
    <section id="scaffolds" className="scroll-mt-28 border-y border-white/[0.06] bg-[#050810] py-20 sm:py-28">
      <Shell>
        <Reveal>
          <SectionLabel index="02">Scaffolds</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,1.1rem+2.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
            Don’t start from zero.
          </h2>
          <p className="mt-3 text-[clamp(1.25rem,1rem+0.7vw,1.7rem)] font-medium tracking-[-0.02em] text-ink/85">
            Start with a proven foundation.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
            Firstbyte Scaffolds are pre-built foundations for common business systems. Instead of
            building everything from scratch, we start with proven infrastructure and customise it
            around your workflows, brand and requirements.
          </p>
        </Reveal>

        <div className="mt-12 hidden items-stretch gap-3 lg:flex">
          {scaffolds.map((scaffold) => (
            <ScaffoldSpine
              key={scaffold.id}
              scaffold={scaffold}
              active={active === scaffold.id}
              onSelect={() => setActive(scaffold.id)}
            />
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 lg:hidden">
          {scaffolds.map((scaffold) => {
            const isActive = active === scaffold.id;
            const Icon = icons[scaffold.id];
            return (
              <article
                key={scaffold.id}
                className={cn(
                  "rounded-2xl border bg-bg transition-colors",
                  isActive ? "border-accent/40" : "border-white/10",
                )}
              >
                <button
                  type="button"
                  className="flex min-h-16 w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isActive}
                  onClick={() => setActive(scaffold.id)}
                >
                  <span className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-accent-2" aria-hidden />
                    <span>
                      <span className="font-mono text-[11px] tracking-[0.16em] text-accent-2">
                        {scaffold.index}
                      </span>
                      <span className="mt-1 block text-base font-semibold tracking-[-0.02em]">
                        {scaffold.name}
                      </span>
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
                      isActive && "rotate-180",
                    )}
                    aria-hidden
                  />
                </button>
                {isActive ? (
                  <div className="fade-rise px-5 pb-5">
                    <ScaffoldDetail scaffold={scaffold} />
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

function ScaffoldSpine({
  scaffold,
  active,
  onSelect,
}: {
  scaffold: Scaffold;
  active: boolean;
  onSelect: () => void;
}) {
  const Icon = icons[scaffold.id];

  return (
    <article
      style={{ flexGrow: active ? 2.7 : 1 }}
      className={cn(
        "flex min-h-[440px] min-w-0 basis-0 flex-col overflow-hidden rounded-2xl border bg-bg transition-[flex-grow,border-color] duration-500 ease-out",
        active ? "border-accent/45" : "border-white/10 hover:border-accent/30",
      )}
      onMouseEnter={onSelect}
    >
      <button
        type="button"
        className={cn("flex w-full flex-col p-5 text-left", !active && "min-h-44 flex-1")}
        aria-expanded={active}
        onClick={onSelect}
        onFocus={onSelect}
      >
        <span className="flex items-center justify-between gap-3">
          <span className="font-mono text-[11px] tracking-[0.16em] text-accent-2">{scaffold.index}</span>
          <Icon className="h-4 w-4 text-accent-2" aria-hidden />
        </span>
        <span
          className={cn(
            "text-lg font-semibold tracking-[-0.02em]",
            active ? "mt-4" : "mt-auto pt-8",
          )}
        >
          {scaffold.name}
        </span>
      </button>
      {active ? (
        <div className="fade-rise px-5 pb-5">
          <ScaffoldDetail scaffold={scaffold} />
        </div>
      ) : null}
    </article>
  );
}

function ScaffoldDetail({ scaffold }: { scaffold: Scaffold }) {
  return (
    <div>
      <p className="text-sm leading-6 text-muted">{scaffold.summary}</p>
      <ul className="mt-4 space-y-2">
        {scaffold.capabilities.map((item) => (
          <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
            <span className="h-1 w-1 shrink-0 bg-accent-2" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
      <ScaffoldPreview id={scaffold.id} />
      <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-accent-2">
        Customisable foundation
      </p>
    </div>
  );
}

function ScaffoldPreview({ id }: { id: string }) {
  if (id === "support") {
    return (
      <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-[#03050a] p-3">
        <PreviewRow label="New enquiry" meta="AI" />
        <PreviewRow label="Answer sent" meta="Instant" active />
        <PreviewRow label="Complex case" meta="Handover" />
      </div>
    );
  }

  if (id === "collections") {
    return (
      <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-[#03050a] p-3">
        <PreviewRow label="Account ··4921" meta="Scheduled" active />
        <PreviewRow label="Account ··1088" meta="Reminder" />
        <PreviewRow label="Account ··7730" meta="Promised" />
      </div>
    );
  }

  if (id === "leads") {
    return (
      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-[#03050a] p-3">
        {["New", "Qualified", "Booked"].map((stage, index) => (
          <div key={stage} className="rounded-lg border border-white/8 p-2">
            <p className="font-mono text-[10px] tracking-[0.12em] text-muted">{stage}</p>
            <p className={cn("mt-3 h-1.5 rounded-full", index === 1 ? "bg-accent" : "bg-white/10")} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2 rounded-xl border border-white/10 bg-[#03050a] p-3">
      <PreviewRow label="Approval" meta="Waiting" />
      <PreviewRow label="Document" meta="Generated" active />
      <PreviewRow label="Report" meta="Scheduled" />
    </div>
  );
}

function PreviewRow({
  label,
  meta,
  active = false,
}: {
  label: string;
  meta: string;
  active?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-white/8 px-2.5 py-2">
      <span className="text-xs text-ink">{label}</span>
      <span className={cn("font-mono text-[10px] tracking-wide", active ? "text-accent-2" : "text-muted")}>
        {meta}
      </span>
    </div>
  );
}
