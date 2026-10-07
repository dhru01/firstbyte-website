const sessions = [
  { subject: "Mathematics", meta: "Grade 10", active: false },
  { subject: "Physical Sciences", meta: "Grade 11", active: false },
  { subject: "English", meta: "Grade 9", active: false },
  { subject: "Life Sciences", meta: "Active", active: true },
];

export function BuddyAIMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#050810] shadow-[0_30px_80px_-48px_rgba(23,105,255,0.65)]">
      <div className="flex items-center gap-2 border-b border-white/8 px-4 py-3">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </span>
        <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
          BuddyAI — learner session
        </span>
      </div>

      <div className="grid min-h-[220px] sm:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)]">
        <ul className="divide-y divide-white/8 border-b border-white/8 sm:border-b-0 sm:border-r">
          {sessions.map((session) => (
            <li key={session.subject} className="px-3 py-2.5 sm:px-4 sm:py-3">
              <p className="text-[13px] text-ink sm:text-sm">{session.subject}</p>
              <p
                className={
                  session.active
                    ? "mt-0.5 text-[11px] text-accent-2"
                    : "mt-0.5 text-[11px] text-muted"
                }
              >
                {session.meta}
              </p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-end gap-2 p-3 sm:p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted/90 sm:text-[10px]">
            CAPS · Life Sciences · Grade 10
          </p>

          <div className="ml-2 max-w-[92%] self-end rounded-lg border border-white/10 px-3 py-2 text-[11px] leading-relaxed text-muted sm:ml-6 sm:text-xs">
            Can you explain photosynthesis?
          </div>

          <div className="mr-1 max-w-[94%] rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-[11px] leading-relaxed text-ink shadow-[0_0_24px_-12px_rgba(23,105,255,0.8)] sm:mr-3 sm:text-xs">
            Sure. Think of it as the way plants make their own food using sunlight.
          </div>

          <p className="mr-1 max-w-[94%] text-[11px] leading-relaxed text-muted sm:mr-3 sm:text-xs">
            Want me to break it down step by step?
          </p>

          <p className="font-mono text-[10px] tracking-[0.14em] text-accent-2">AI Tutor active</p>
        </div>
      </div>
    </div>
  );
}
