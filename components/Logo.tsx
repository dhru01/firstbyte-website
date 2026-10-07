import { cn } from "@/lib/cn";
import { ByteMotif } from "./ByteMotif";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <ByteMotif />
      <span className="text-[13px] font-medium tracking-[0.22em] text-ink">FIRSTBYTE</span>
    </span>
  );
}
