import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  as?: ElementType;
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  size?: keyof typeof sizes;
};

const tones = {
  white: "bg-white",
  mist: "bg-mist-50",
  petal: "bg-petal-50",
  lilac: "bg-lilac-100",
  bloom: "surface-bloom",
  gradientPetal: "surface-bloom",
  gradientFaq: "surface-faq",
  brand: "bg-brand-500 text-white",
} as const;

const sizes = {
  none: "",
  sm: "py-12 sm:py-14",
  md: "py-14 sm:py-16 lg:py-20",
  lg: "py-16 sm:py-20 lg:py-24",
} as const;

export function Section({
  as: Tag = "section",
  id,
  children,
  className,
  tone = "white",
  size = "lg",
}: SectionProps) {
  return (
    <Tag id={id} className={cn(sizes[size], tones[tone], className)}>
      {children}
    </Tag>
  );
}
