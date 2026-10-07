import { cn } from "@/lib/cn";

export function ByteMotif({ className }: { className?: string }) {
  return (
    <span className={cn("inline-grid grid-cols-4 gap-[3px]", className)} aria-hidden="true">
      {Array.from({ length: 8 }, (_, index) => (
        <span
          key={index}
          className="byte-dot"
          style={{ animationDelay: `${index * 0.18}s` }}
        />
      ))}
    </span>
  );
}

export function ByteField({ rows = 4 }: { rows?: number }) {
  const count = rows * 8;

  return (
    <div className="grid w-fit grid-cols-8 gap-2.5 sm:gap-3.5" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className="byte-cell"
          style={{
            animationDelay: `${(index % 8) * 0.16 + Math.floor(index / 8) * 0.72}s`,
          }}
        />
      ))}
    </div>
  );
}
