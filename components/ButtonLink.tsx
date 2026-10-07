import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = variant === "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  arrow?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-colors",
        variant === "primary"
          ? "bg-accent text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_12px_36px_-16px_rgba(23,105,255,0.95)] hover:bg-accent-2"
          : "border border-white/15 bg-white/[0.02] text-ink hover:border-white/30 hover:bg-white/[0.05]",
        className,
      )}
    >
      {children}
      {arrow ? (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden
        />
      ) : null}
    </a>
  );
}
