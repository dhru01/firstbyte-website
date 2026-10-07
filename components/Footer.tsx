import { footerLinks, site } from "@/data/site";
import { ByteMotif } from "./ByteMotif";
import { Logo } from "./Logo";
import { Shell } from "./Shell";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <Shell className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-6 text-muted">
              AI Automation & Custom Software
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="space-y-1">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="link-underline inline-flex min-h-11 items-center text-sm text-muted hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex min-h-11 items-center gap-2 text-sm text-muted hover:text-ink"
            >
              <LinkedInIcon />
              <span className="link-underline">LinkedIn</span>
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© Firstbyte. All rights reserved.</p>
          <p className="inline-flex items-center gap-3">
            <ByteMotif />
            Built intelligently.
          </p>
        </div>
      </Shell>
    </footer>
  );
}
