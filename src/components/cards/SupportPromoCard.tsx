import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type SupportPromoCardProps = {
  body: string;
  cta: { href: string; label: string };
  className?: string;
};

export function SupportPromoCard({ body, cta, className }: SupportPromoCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center justify-between gap-6 rounded-3xl bg-[linear-gradient(155deg,#fff7fa_1.78%,#ffdaea_74.85%)] px-5 py-8 sm:gap-8 sm:px-6 sm:py-9 lg:px-7 lg:pt-10 lg:pb-9",
        className,
      )}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={145}
        height={66}
        className="h-12 w-auto object-contain sm:h-14 lg:h-[58px]"
      />

      <div className="flex w-full flex-col items-center gap-6 sm:gap-8">
        <p className="max-w-[288px] text-center text-base leading-relaxed text-ink-950 sm:text-lg sm:leading-[30px] lg:text-[clamp(1rem,1.35vw,1.25rem)] lg:leading-snug">
          {body}
        </p>

        <Button
          href={cta.href}
          size="lg"
          className="w-full sm:w-auto"
          iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
        >
          {cta.label}
        </Button>
      </div>
    </article>
  );
}
