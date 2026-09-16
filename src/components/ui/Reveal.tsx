import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Stagger direct children bottom → top instead of animating this node. */
  stagger?: boolean;
  /** Play on load (hero), not on scroll. */
  hero?: boolean;
  delay?: number;
};

/**
 * Marks a node for the global GSAP reveal system (bottom → top + fade).
 */
export function Reveal({
  as: Tag = "div",
  children,
  className,
  stagger = false,
  hero = false,
  delay,
}: RevealProps) {
  const attrs: Record<string, string | number | undefined> = {};

  if (hero) attrs["data-reveal-hero"] = "";
  else if (stagger) attrs["data-reveal-stagger"] = "";
  else attrs["data-reveal"] = "";

  if (typeof delay === "number") attrs["data-reveal-delay"] = delay;

  return (
    <Tag className={cn(className)} {...attrs}>
      {children}
    </Tag>
  );
}
