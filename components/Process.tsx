"use client";

import { m, useReducedMotion, useScroll } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "@/data/process";
import { SectionLabel } from "./SectionLabel";
import { Shell } from "./Shell";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 55%"],
  });

  return (
    <section id="process" className="scroll-mt-28 py-20 sm:py-28">
      <Shell>
        <SectionLabel index="04">Process</SectionLabel>
        <h2 className="mt-5 max-w-3xl text-[clamp(2rem,1.1rem+2.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
          From bottleneck to automation.
        </h2>

        <div ref={ref} className="relative mt-14 lg:mt-16">
          <div className="absolute bottom-2 left-[5px] top-2 w-px bg-white/10 lg:hidden" aria-hidden />
          <m.div
            className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-accent lg:hidden"
            style={{ scaleY: reduce ? 1 : scrollYProgress }}
            aria-hidden
          />

          <div className="absolute left-0 right-0 top-[5px] hidden h-px bg-white/10 lg:block" aria-hidden />
          <m.div
            className="absolute left-0 right-0 top-[5px] hidden h-px origin-left bg-accent lg:block"
            style={{ scaleX: reduce ? 1 : scrollYProgress }}
            aria-hidden
          />

          <ol className="grid gap-10 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step) => (
              <li key={step.index} className="relative pl-8 lg:pl-0 lg:pt-8">
                <span className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border border-accent bg-bg lg:left-0 lg:top-0" />
                <p className="font-mono text-[11px] tracking-[0.18em] text-accent-2">{step.index}</p>
                <h3 className="mt-3 text-sm font-semibold tracking-[0.16em] uppercase">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </Shell>
    </section>
  );
}
