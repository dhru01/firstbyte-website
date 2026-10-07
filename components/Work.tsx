import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectMockup } from "./ProjectMockup";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";
import { Shell } from "./Shell";

export function Work() {
  return (
    <section id="work" className="scroll-mt-28 py-20 sm:py-28">
      <Shell>
        <Reveal>
          <SectionLabel index="03">Selected work</SectionLabel>
          <h2 className="mt-5 max-w-3xl text-[clamp(2rem,1.1rem+2.2vw,3.4rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance">
            Built for the real world.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted">
            A selection of systems we’ve designed to solve real operational problems.
          </p>
        </Reveal>

        <div className="mt-6">
          {projects.map((project, index) => {
            const reverse = index % 2 === 1;
            return (
              <article
                key={project.id}
                id={project.id}
                className="grid items-center gap-10 border-t border-white/10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20"
              >
                <div className={cn(reverse && "lg:order-2")}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                    <span className="text-accent-2">{String(index + 1).padStart(2, "0")}</span>
                    <span className="px-2 text-white/25">/</span>
                    {project.category}
                  </p>
                  <h3 className="mt-3 text-[clamp(1.8rem,1.2rem+1.6vw,2.75rem)] font-semibold tracking-[-0.03em]">
                    {project.name}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-7 text-muted">{project.description}</p>
                  <dl className="mt-8 space-y-5">
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2">The problem</dt>
                      <dd className="mt-2 max-w-md text-sm leading-6 text-ink/90">{project.problem}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2">What we built</dt>
                      <dd className="mt-2 max-w-md text-sm leading-6 text-ink/90">{project.built}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-2">The result</dt>
                      <dd className="mt-2 max-w-md text-sm leading-6 text-ink/90">{project.result}</dd>
                    </div>
                  </dl>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.capabilities.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={project.href ?? "#contact"}
                    className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink"
                  >
                    <span className="link-underline">View Project</span>
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </a>
                </div>
                <div className={cn("group", reverse && "lg:order-1")}>
                  <div className="overflow-hidden rounded-2xl">
                    <div className="transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                      <ProjectMockup project={project} />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}
