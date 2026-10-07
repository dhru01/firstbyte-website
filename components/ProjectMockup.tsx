import Image from "next/image";
import type { Project } from "@/data/projects";

const collectionRows = [
  { id: "4921", channel: "WhatsApp", status: "Scheduled" },
  { id: "1088", channel: "SMS", status: "Reminder" },
  { id: "7730", channel: "Email", status: "Handover" },
  { id: "2204", channel: "WhatsApp", status: "Promised" },
];

const supportThreads = [
  { title: "Invoice question", meta: "AI replied", active: true },
  { title: "Speak to a person", meta: "Handover", active: false },
  { title: "Status update", meta: "Waiting", active: false },
  { title: "Resolved enquiry", meta: "Closed", active: false },
];

export function ProjectMockup({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        sizes="(min-width: 1024px) 540px, 100vw"
        className="h-auto w-full"
      />
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050810] shadow-[0_30px_80px_-48px_rgba(23,105,255,0.65)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          {project.name} — {project.mockup === "collections" ? "collections" : "inbox"}
        </span>
      </div>
      {project.mockup === "collections" ? <CollectionsBody /> : <SupportBody />}
    </div>
  );
}

function CollectionsBody() {
  return (
    <div className="grid sm:grid-cols-[148px_1fr]">
      <aside className="hidden border-r border-white/8 p-3 sm:block">
        {["Queue", "Promises", "Payments", "Reports"].map((item, index) => (
          <div
            key={item}
            className={
              index === 0
                ? "rounded-md bg-white/[0.05] px-2.5 py-2 text-xs text-ink"
                : "px-2.5 py-2 text-xs text-muted"
            }
          >
            {item}
          </div>
        ))}
      </aside>
      <div className="p-4 sm:p-5">
        <div className="flex items-center justify-between gap-3">
          <p className="text-sm font-medium">Today</p>
          <span className="font-mono text-[10px] tracking-[0.16em] text-accent-2">Auto</span>
        </div>
        <ul className="mt-2 divide-y divide-white/8">
          {collectionRows.map((row) => (
            <li key={row.id} className="flex items-center justify-between gap-3 py-3">
              <div className="min-w-0">
                <p className="font-mono text-xs text-ink">Account ··{row.id}</p>
                <p className="mt-1 text-[11px] text-muted">{row.channel}</p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 px-2 py-1 text-[10px] tracking-wide text-muted">
                {row.status}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-2 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2.5">
          <p className="text-xs text-ink">Follow-up scheduled</p>
          <p className="mt-1 font-mono text-[10px] text-muted">WhatsApp · next business morning</p>
        </div>
      </div>
    </div>
  );
}

function SupportBody() {
  return (
    <div className="grid sm:grid-cols-[1fr_0.9fr]">
      <ul className="divide-y divide-white/8 border-white/8 sm:border-r">
        {supportThreads.map((thread) => (
          <li key={thread.title} className="px-4 py-3">
            <p className="text-sm text-ink">{thread.title}</p>
            <p className={thread.active ? "mt-1 text-[11px] text-accent-2" : "mt-1 text-[11px] text-muted"}>
              {thread.meta}
            </p>
          </li>
        ))}
      </ul>
      <div className="hidden flex-col justify-end gap-2 p-4 sm:flex">
        <div className="ml-6 rounded-lg border border-white/10 px-3 py-2 text-xs text-muted">
          Where is my invoice?
        </div>
        <div className="mr-4 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-xs text-ink">
          Sent. The copy is in your email, and a person is available if it doesn’t match.
        </div>
        <p className="font-mono text-[10px] tracking-[0.14em] text-muted">Handover ready</p>
      </div>
    </div>
  );
}
