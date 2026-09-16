import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  tone?: "ink" | "brand" | "white";
};

const tones = {
  ink: "text-ink-800 hover:text-brand-500",
  brand: "text-brand-500 hover:text-brand-600",
  white: "text-white hover:text-white/80",
} as const;

export function ArrowLink({ href, children, className, tone = "ink" }: ArrowLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors",
        tones[tone],
        className,
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </Link>
  );
}
