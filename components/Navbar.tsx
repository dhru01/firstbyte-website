"use client";

import { useEffect, useRef, useState } from "react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/cn";
import { Logo } from "./Logo";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const nodes = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-42% 0px -48% 0px", threshold: [0, 0.25, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-bg from-45% to-transparent"
      />
      <div className="relative z-20 mx-auto w-full max-w-[1160px] px-5 pt-[max(0.85rem,env(safe-area-inset-top))] sm:px-8">
        <div
          className={cn(
            "relative z-10 flex h-16 items-center justify-between rounded-2xl border px-3 transition-[background-color,border-color,box-shadow] duration-300 sm:px-4",
            open || scrolled
              ? "border-white/12 bg-[#050810]/95 shadow-[0_16px_50px_-28px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              : "border-white/10 bg-[#050810]/75 backdrop-blur-md",
          )}
        >
          <a href="#top" className="rounded-md pl-1" aria-label="Firstbyte, back to top" onClick={close}>
            <Logo />
          </a>

          <div className="flex items-center gap-6 lg:gap-7">
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                aria-current={active === link.id ? "true" : undefined}
                className={cn(
                  "link-underline text-sm text-muted transition-colors hover:text-ink",
                  active === link.id && "text-ink",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
            <button
              ref={toggleRef}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-5 bg-ink transition duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-5 bg-ink transition duration-300",
                    open ? "top-1.5 -rotate-45" : "top-2.5",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="fixed inset-0 top-0 z-10 bg-bg px-5 pt-28 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-8 lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-[1160px] flex-col">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="rise-in"
                style={{ animationDelay: `${40 + index * 45}ms` }}
              >
                <a
                  href={link.href}
                  className="flex min-h-14 items-center border-b border-white/8 text-3xl font-medium tracking-[-0.03em]"
                  onClick={close}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
