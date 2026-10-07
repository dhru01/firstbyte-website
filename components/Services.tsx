"use client";

import { Cable, LayoutDashboard, Waypoints, Workflow, type LucideIcon } from "lucide-react";
import { services } from "@/data/services";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Shell } from "./Shell";

const icons: Record<string, LucideIcon> = {
  automation: Workflow,
  agents: Waypoints,
  software: LayoutDashboard,
  integrations: Cable,
};

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-20 sm:py-28">
      <Shell className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <SectionLabel index="01">Capabilities</SectionLabel>
          <h2 className="mt-5 text-[clamp(2rem,1.1rem+2.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
            Technology built around your business.
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-muted">
            We identify repetitive, inefficient processes and replace them with intelligent systems
            designed around the way your business actually works.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {services.map((service, index) => {
            const Icon = icons[service.id];
            return (
              <Reveal key={service.id} delay={index * 0.06} className="h-full">
                <article
                  onPointerMove={(event) => {
                    if (!window.matchMedia("(pointer: fine)").matches) return;
                    const rect = event.currentTarget.getBoundingClientRect();
                    event.currentTarget.style.setProperty("--x", `${event.clientX - rect.left}px`);
                    event.currentTarget.style.setProperty("--y", `${event.clientY - rect.top}px`);
                  }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-raised p-6 transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-accent/50"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(420px circle at var(--x, 50%) var(--y, 0px), rgba(23,105,255,0.18), transparent 46%)",
                    }}
                  />
                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 text-accent-2">
                        <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="font-mono text-[11px] tracking-[0.16em] text-muted">
                        {service.index}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em]">{service.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-muted">{service.description}</p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
