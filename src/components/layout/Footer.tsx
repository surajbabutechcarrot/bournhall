import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { footerNav, site, socialLinks } from "@/lib/site";

function SocialIcon({ label, className }: { label: string; className?: string }) {
  if (label === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        aria-hidden
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M6.5 9.5H4V20h2.5V9.5ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.4c0-1.5-.5-2.5-1.8-2.5-1 0-1.5.7-1.8 1.4-.1.2-.1.6-.1.9V20H11V9.5h2.4v1.4c.5-.8 1.5-1.9 3.5-1.9 2.5 0 4.1 1.6 4.1 5.1V20Z" />
      </svg>
    );
  }
  if (label === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.34 6.34 0 0 0 1.95-4.49V8.65a8.28 8.28 0 0 0 5.23 1.83V7.03a4.84 4.84 0 0 1-1.41-.34Z" />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M14.7 10.3 22 2h-2.2l-6.3 7.1L8.4 2H2l7.7 10.9L2 22h2.2l6.8-7.7L15.6 22H22l-7.3-11.7Zm-2.4 2.7-.8-1.1L5 3.5h2.6l5 7.2.8 1.1L19.4 20.5H16.8l-4.5-7.5Z" />
      </svg>
    );
  }
  if (label === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
        <path d="M21.2 7.4a2.6 2.6 0 0 0-1.8-1.9C17.8 5 12 5 12 5s-5.8 0-7.4.5A2.6 2.6 0 0 0 2.8 7.4C2.4 9 2.4 12 2.4 12s0 3 .4 4.6a2.6 2.6 0 0 0 1.8 1.9C6.2 19 12 19 12 19s5.8 0 7.4-.5a2.6 2.6 0 0 0 1.8-1.9c.4-1.6.4-4.6.4-4.6s0-3-.4-4.6ZM10.1 15V9l5.2 3-5.2 3Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden fill="currentColor">
      <path d="M14 8.2h2.5V5.5H14c-2.6 0-4.3 1.6-4.3 4.4v1.8H7.5V14h2.2v7h2.8v-7h2.6l.5-2.3h-3.1v-1.5c0-.8.4-1.5 1.5-1.5Z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-500 text-white">
      <Container className="grid grid-cols-2 gap-x-6 gap-y-10 pt-10 pb-16 sm:grid-cols-2 sm:gap-x-12 sm:pb-20 lg:grid-cols-[1.4fr_1fr_1.1fr_1fr] lg:gap-14">
        <div className="col-span-2 lg:col-span-1">
          <Logo inverted href="/" size="lg" />
          <p className="mt-4 max-w-sm text-sm sm:text-[15px] leading-relaxed text-white/70">
            Compassionate, advanced fertility care across three clinics in the UAE.
          </p>
        </div>

        <FooterColumn title="Quick Links" links={footerNav.quickLinks} />
        <FooterColumn title="Patient Information" links={footerNav.patientInformation} />

        <div className="col-span-2 sm:col-span-2 lg:col-span-1 flex flex-col sm:flex-row lg:flex-col justify-between sm:items-start lg:items-start gap-8">
          <FooterColumn title="Policies" links={footerNav.policies} />
          <div>
            <p className="text-sm font-semibold text-white">Socials</p>
            <ul className="mt-3.5 flex items-center gap-2.5">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid size-9.5 place-items-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/35 active:scale-95"
                  >
                    <SocialIcon label={item.label} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="border-t border-white/10 py-6 sm:py-7">
        <p className="text-center text-xs sm:text-sm text-white/60">
          © 2026 {site.legalName}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  links = [],
}: {
  title: string;
  links?: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-base font-semibold text-white">{title}</p>
      <ul className="mt-4 space-y-2.5">
        {(links ?? []).map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-base font-normal text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
