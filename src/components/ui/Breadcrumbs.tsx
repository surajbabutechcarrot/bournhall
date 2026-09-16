import Link from "next/link";
import { cn } from "@/lib/cn";

export type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-ink-400", className)}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {item.href && !last ? (
                <Link href={item.href} className="transition-colors hover:text-brand-600">
                  {item.label}
                </Link>
              ) : (
                <span className={last ? "font-medium text-ink-700" : undefined}>{item.label}</span>
              )}
              {!last ? <span aria-hidden className="text-brand-300">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
