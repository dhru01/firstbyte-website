"use client";

import { useEffect, useRef } from "react";
import { projectMail, site } from "@/data/site";
import { ButtonLink } from "./ButtonLink";
import { Shell } from "./Shell";

export function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      element.style.setProperty("--gx", `${event.clientX - bounds.left}px`);
      element.style.setProperty("--gy", `${event.clientY - bounds.top}px`);
    };

    element.addEventListener("pointermove", onMove);
    return () => element.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <section
      ref={ref}
      id="contact"
      className="relative scroll-mt-28 overflow-hidden py-24 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(620px circle at var(--gx, 50%) var(--gy, 38%), rgba(23,105,255,0.22), transparent 62%)",
        }}
      />
      <Shell className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h2 className="text-[clamp(2.4rem,1.2rem+3.2vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-balance">
            What’s slowing your business down?
          </h2>
          <p className="mt-3 text-[clamp(2.4rem,1.2rem+3.2vw,4.6rem)] font-semibold leading-[1.05] tracking-[-0.035em] text-accent-2">
            Let’s automate it.
          </p>
          <p className="mt-6 max-w-md text-base leading-7 text-muted">
            Tell us about the process that’s taking up your team’s time. We’ll help you figure out a
            better way to run it.
          </p>
          <div className="mt-9 flex w-full flex-col items-center gap-5">
            <ButtonLink href={projectMail} className="w-full sm:w-auto">
              Start a Project
            </ButtonLink>
            <a href={`mailto:${site.email}`} className="link-underline text-sm text-muted hover:text-ink">
              {site.email}
            </a>
          </div>
        </div>
      </Shell>
    </section>
  );
}
