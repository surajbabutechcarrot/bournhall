"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { treatmentsMegaMenu } from "@/lib/site";
import { cn } from "@/lib/cn";

type TreatmentsMegaMenuProps = {
  id?: string;
  className?: string;
  open?: boolean;
  onNavigate?: () => void;
};

export function TreatmentsMegaMenu({
  id,
  className,
  open = true,
  onNavigate,
}: TreatmentsMegaMenuProps) {
  const pathname = usePathname();
  const { columns, featured } = treatmentsMegaMenu;
  const columnCount = columns.length;

  return (
    <div
      id={id}
      data-open={open ? "true" : "false"}
      className={cn(
        "mega-menu-panel rounded-3xl bg-white px-5 py-6 shadow-lift sm:px-6 sm:py-7 xl:px-7 xl:py-8",
        className,
      )}
    >
      <div className="flex gap-3 xl:gap-4">
        {columns.map((column, columnIndex) => (
          <div
            key={column.title}
            className="mega-anim flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3"
            style={
              {
                "--mega-i": columnIndex,
                "--mega-n": columnCount + 1,
              } as CSSProperties
            }
          >
            <p className="text-sm leading-snug font-semibold text-brand-500 xl:text-base xl:leading-[26px]">
              {column.title}
            </p>

            <ul className="flex flex-col gap-2 sm:gap-3">
              {column.links.map((link, linkIndex) => {
                const isActive = pathname === link.href;
                return (
                  <li
                    key={link.label}
                    style={{ "--mega-link-i": linkIndex } as CSSProperties}
                  >
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      className={cn(
                        "text-sm leading-5 font-medium transition-colors",
                        isActive
                          ? "font-semibold text-brand-500"
                          : "text-ink-900 hover:text-brand-500",
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {"trailing" in column && column.trailing ? (
              <Link
                href={column.trailing.href}
                onClick={onNavigate}
                className="mega-anim-trailing pt-2 text-sm leading-snug font-semibold text-brand-500 transition-colors hover:text-brand-600 xl:pt-3 xl:text-base xl:leading-[26px]"
              >
                {column.trailing.label}
              </Link>
            ) : null}
          </div>
        ))}

        <Link
          href={featured.href}
          onClick={onNavigate}
          className="mega-featured mega-anim mega-anim-featured group"
          style={
            {
              "--mega-i": columnCount,
              "--mega-n": columnCount + 1,
            } as CSSProperties
          }
        >
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="(min-width: 1280px) 335px, 240px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(186deg,rgba(0,0,0,0)_7%,rgba(30,10,18,0.1)_63%)]"
          />
          <span className="absolute bottom-4 left-4 inline-flex h-10 items-center gap-2 rounded-full bg-brand-500 px-4 text-sm leading-5 font-semibold text-white transition-colors group-hover:bg-brand-600 xl:bottom-6 xl:left-6 xl:h-[50px] xl:px-6">
            {featured.label}
            <ArrowRight aria-hidden className="size-5" strokeWidth={1.6} />
          </span>
        </Link>
      </div>
    </div>
  );
}
