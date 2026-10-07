import { ByteField } from "./ByteMotif";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Shell } from "./Shell";

export function About() {
  return (
    <section id="about" className="scroll-mt-28 py-20 sm:py-28">
      <Shell className="grid items-end gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-7">
          <SectionLabel index="05">Firstbyte</SectionLabel>
          <h2 className="mt-5 max-w-xl text-[clamp(2rem,1.1rem+2.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
            Automation should solve problems — not create new ones.
          </h2>
          <div className="mt-8 max-w-xl space-y-5 text-base leading-7 text-muted">
            <p>
              Firstbyte is an AI automation and software company focused on building practical
              technology for real businesses.
            </p>
            <p>
              We combine AI, automation and custom software to remove repetitive work, connect
              disconnected processes and create systems that help teams operate more efficiently.
            </p>
          </div>
        </Reveal>

        <Reveal className="lg:col-span-5" delay={0.08}>
          <p className="max-w-sm text-xl font-medium leading-snug tracking-[-0.02em] sm:text-2xl">
            We don’t automate for the sake of using AI.
          </p>
          <p className="mt-4 max-w-sm text-xl font-medium leading-snug tracking-[-0.02em] text-ink/80 sm:text-2xl">
            We build technology where it actually makes sense.
          </p>
          <div className="mt-10">
            <ByteField rows={4} />
          </div>
        </Reveal>
      </Shell>
    </section>
  );
}
