"use client";

import { useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { automatedSteps, manualSteps } from "@/data/demo";
import { cn } from "@/lib/cn";
import { Shell } from "./Shell";

type Mode = "manual" | "automated";

export function AutomationDemo() {
  const [mode, setMode] = useState<Mode>("manual");
  const steps = mode === "manual" ? manualSteps : automatedSteps;

  return (
    <section id="demo" className="scroll-mt-28 py-16 sm:py-24">
      <Shell>
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-[clamp(2rem,1.1rem+2.2vw,3.15rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
              See what automation changes.
            </h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-muted">
              The same enquiry. Two ways of running it.
            </p>
            <div
              className="mt-8 inline-flex w-full rounded-full border border-white/10 bg-white/[0.03] p-1 sm:w-auto"
              role="group"
              aria-label="Workflow mode"
            >
              <ModeButton current={mode} value="manual" onSelect={setMode}>
                Manual
              </ModeButton>
              <ModeButton current={mode} value="automated" onSelect={setMode}>
                Automated
              </ModeButton>
            </div>
            <p className="sr-only" aria-live="polite">
              {mode === "manual" ? "Showing the manual workflow." : "Showing the automated workflow."}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="rounded-2xl border border-white/10 bg-raised p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">
                  {mode === "manual" ? "Before" : "After Firstbyte"}
                </p>
                <p className="font-mono text-[11px] tracking-[0.14em] text-muted">
                  {steps.length} steps
                </p>
              </div>
              <AnimatePresence mode="wait">
                <m.ol
                  key={mode}
                  className="relative mt-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  {steps.map((step, index) => {
                    const highlighted = mode === "automated" && index > 0;
                    return (
                      <li key={step} className="relative flex gap-4 pb-4 last:pb-0">
                        {index < steps.length - 1 ? (
                          <span className="absolute top-6 bottom-0 left-[11px] w-px bg-white/10" aria-hidden />
                        ) : null}
                        <span
                          className={cn(
                            "relative z-[1] mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full border font-mono text-[10px]",
                            highlighted
                              ? "border-accent/60 bg-accent/15 text-accent-2"
                              : "border-white/15 bg-bg text-muted",
                          )}
                        >
                          {index + 1}
                        </span>
                        <span
                          className={cn(
                            "flex min-h-11 flex-1 items-center rounded-xl border px-3 text-sm",
                            highlighted
                              ? "border-accent/25 bg-accent/[0.07] text-ink"
                              : "border-white/8 text-ink/90",
                          )}
                        >
                          {step}
                        </span>
                      </li>
                    );
                  })}
                </m.ol>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Shell>
    </section>
  );
}

function ModeButton({
  current,
  value,
  onSelect,
  children,
}: {
  current: Mode;
  value: Mode;
  onSelect: (mode: Mode) => void;
  children: string;
}) {
  const selected = current === value;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(value)}
      className={cn(
        "h-11 flex-1 rounded-full px-4 text-xs font-medium tracking-[0.14em] uppercase transition-colors sm:flex-none sm:px-5",
        selected ? "bg-accent text-white" : "text-muted hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}
