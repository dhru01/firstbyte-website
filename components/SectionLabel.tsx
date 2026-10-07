import { ByteMotif } from "./ByteMotif";

export function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="flex items-center gap-3">
      <ByteMotif />
      <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-muted">
        <span className="text-accent-2">{index}</span>
        <span className="px-2 text-white/25">/</span>
        {children}
      </p>
    </div>
  );
}
