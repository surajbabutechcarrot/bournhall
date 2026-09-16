import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * The design highlights the closing words of every heading in the brand
 * burgundy, set in italic. Keeping it here means one place to tune it.
 */
export function Accent({ children, className }: { children: ReactNode; className?: string }) {
  return <em className={cn("font-semibold italic text-brand-500", className)}>{children}</em>;
}
