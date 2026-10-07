import { ButtonLink } from "./ButtonLink";
import { HeroVisual } from "./HeroVisual";
import { Reveal } from "./Reveal";
import { Shell } from "./Shell";

export function Hero() {
  return (
    <section id="top" className="relative overflow-x-clip">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-accent/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[18%] hidden h-80 w-80 rounded-full bg-accent/10 blur-3xl lg:block"
        aria-hidden
      />

      <Shell className="relative grid items-center gap-14 pt-28 pb-20 sm:pt-32 lg:min-h-[100svh] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 lg:pt-28 lg:pb-16">
        <div>
          <Reveal>
            <h1 className="max-w-[12em] text-[clamp(2.35rem,1.15rem+4.4vw,4.75rem)] font-semibold leading-[1.04] tracking-[-0.035em] text-balance">
              We build systems that <span className="text-accent-2">do the work</span> for you.
            </h1>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-6 max-w-md text-base leading-7 text-muted sm:text-[1.0625rem] sm:leading-8">
              Firstbyte builds AI-powered automations, intelligent agents and custom software that
              eliminate repetitive work and help businesses operate smarter.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-8">
              <ButtonLink href="#work" className="w-full sm:w-auto">
                Explore Our Work
              </ButtonLink>
            </div>
            <p className="mt-5 inline-flex items-center gap-2.5 text-sm text-muted">
              <span className="status-dot h-2 w-2 rounded-full bg-[#3ddc97]" aria-hidden />
              Available for new projects
            </p>
          </Reveal>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted/80">
            Automation
            <span className="px-2 text-white/20">/</span>
            Agents
            <span className="px-2 text-white/20">/</span>
            Software
          </p>
        </div>

        <HeroVisual />
      </Shell>
    </section>
  );
}
