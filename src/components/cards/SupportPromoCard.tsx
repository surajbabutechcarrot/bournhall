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
        "flex flex-col items-center justify-between gap-10 rounded-3xl bg-[linear-gradient(155deg,#fff7fa_1.78%,#ffdaea_74.85%)] px-8 pt-[52px] pb-11",
        className,
      )}
    >
      <Image
        src="/images/logo-mark.png"
        alt=""
        width={145}
        height={66}
        className="h-[66px] w-[145px] object-contain"
      />

      <div className="flex flex-col items-center gap-[42px]">
        <p className="max-w-[288px] text-center text-xl leading-[34px] text-ink-950">{body}</p>

        <Button
          href={cta.href}
          size="lg"
          iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
        >
          {cta.label}
        </Button>
      </div>
    </article>
  );
}
