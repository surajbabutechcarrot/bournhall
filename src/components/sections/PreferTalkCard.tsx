import Image from "next/image";
import { Phone } from "lucide-react";
import { cn } from "@/lib/cn";

type PreferTalkCardProps = {
  phone?: string;
  phoneHref?: string;
  whatsappHref?: string;
  className?: string;
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01Zm-7.01 15.24h-.01a8.22 8.22 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.2 8.2 0 0 1 2.42 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.17 1.75 2.67 4.23 3.74 1.49.64 1.89.7 2.56.59.42-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function PreferTalkCard({
  phone = "+971 4 429 8400",
  phoneHref = "tel:+97144298400",
  whatsappHref = "https://wa.me/97144298400",
  className,
}: PreferTalkCardProps) {
  return (
    <aside
      className={cn(
        "relative flex items-center gap-3 overflow-hidden rounded-[22px] bg-[#efeaf6] px-5 py-5 sm:gap-5 sm:px-6 sm:py-6",
        className,
      )}
    >
      <div className="relative z-10 min-w-0 flex-1">
        <p className="text-lg font-semibold tracking-tight text-ink-950 sm:text-[1.25rem]">
          Prefer to talk now?
        </p>
        <ul className="mt-4 space-y-3.5">
          <li>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-3 text-[15px] font-medium text-brand-600 transition-colors hover:text-brand-500"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                <Phone aria-hidden className="size-3.5" strokeWidth={2} />
              </span>
              {phone}
            </a>
          </li>
          <li>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 text-[15px] font-medium text-brand-600 transition-colors hover:text-brand-500"
            >
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-brand-500 text-white">
                <WhatsAppIcon className="size-3.5" />
              </span>
              Chat on WhatsApp
            </a>
          </li>
        </ul>
      </div>

      <Image
        src="/illustrations/talk-heart.svg"
        alt=""
        width={120}
        height={120}
        className="relative z-10 size-[88px] shrink-0 sm:size-[104px]"
      />
    </aside>
  );
}
