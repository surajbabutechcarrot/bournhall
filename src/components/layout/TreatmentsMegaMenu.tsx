"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { getTreatment } from "@/content/treatments";
import { images } from "@/lib/images";
import { treatmentsMegaMenu } from "@/lib/site";
import { cn } from "@/lib/cn";

type TreatmentsMegaMenuProps = {
  id?: string;
  className?: string;
  open?: boolean;
  onNavigate?: () => void;
};

type Preview = {
  href: string;
  label: string;
  image: { src: string; alt: string };
};

function previewFor(label: string, href: string): Preview {
  const slug = href.match(/^\/treatments\/([^/?#]+)/)?.[1];
  if (slug) {
    const treatment = getTreatment(slug);
    if (treatment) {
      return { href, label, image: treatment.image };
    }
  }

  if (label === "Female Fertility") {
    return { href, label, image: images.insightFemaleFertility };
  }

  if (label.includes("PRP") || label.includes("Platelet")) {
    return { href, label, image: images.consultation };
  }

  return { href, label, image: images.lab };
}

function defaultPreview(): Preview {
  const treatment = getTreatment("egg-freezing");
  return {
    href: treatmentsMegaMenu.featured.href,
    label: treatmentsMegaMenu.featured.label,
    image: treatment?.image ?? treatmentsMegaMenu.featured.image,
  };
}

export function TreatmentsMegaMenu({
  id,
  className,
  open = true,
  onNavigate,
}: TreatmentsMegaMenuProps) {
  const pathname = usePathname();
  const { columns } = treatmentsMegaMenu;
  const columnCount = columns.length;
  const initial = useMemo(() => defaultPreview(), []);
  const [active, setActive] = useState<Preview>(initial);

  const catalog = useMemo(() => {
    const bySrc = new Map<string, Preview["image"]>();
    bySrc.set(initial.image.src, initial.image);

    for (const column of columns) {
      for (const link of column.links) {
        const preview = previewFor(link.label, link.href);
        bySrc.set(preview.image.src, preview.image);
      }
      if ("trailing" in column && column.trailing) {
        const preview = previewFor(column.trailing.label, column.trailing.href);
        bySrc.set(preview.image.src, preview.image);
      }
    }

    return [...bySrc.values()];
  }, [columns, initial.image]);

  useEffect(() => {
    if (!open) setActive(initial);
  }, [open, initial]);

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
                const isPreview = active.href === link.href && active.label === link.label;
                return (
                  <li
                    key={link.label}
                    style={{ "--mega-link-i": linkIndex } as CSSProperties}
                  >
                    <Link
                      href={link.href}
                      onClick={onNavigate}
                      onMouseEnter={() => setActive(previewFor(link.label, link.href))}
                      onFocus={() => setActive(previewFor(link.label, link.href))}
                      className={cn(
                        "text-sm leading-5 font-medium transition-colors",
                        isActive || isPreview
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
                onMouseEnter={() =>
                  setActive(previewFor(column.trailing!.label, column.trailing!.href))
                }
                onFocus={() =>
                  setActive(previewFor(column.trailing!.label, column.trailing!.href))
                }
                className={cn(
                  "mega-anim-trailing pt-2 text-sm leading-snug font-semibold transition-colors xl:pt-3 xl:text-base xl:leading-[26px]",
                  active.label === column.trailing.label
                    ? "text-brand-600"
                    : "text-brand-500 hover:text-brand-600",
                )}
              >
                {column.trailing.label}
              </Link>
            ) : null}
          </div>
        ))}

        <Link
          href={active.href}
          onClick={onNavigate}
          className="mega-featured mega-anim mega-anim-featured group"
          style={
            {
              "--mega-i": columnCount,
              "--mega-n": columnCount + 1,
            } as CSSProperties
          }
          aria-label={active.label}
        >
          {catalog.map((image) => {
            const isActive = image.src === active.image.src;
            return (
              <Image
                key={image.src}
                src={image.src}
                alt={isActive ? active.image.alt : ""}
                fill
                sizes="(min-width: 1280px) 335px, 240px"
                data-no-parallax
                data-active={isActive ? "true" : "false"}
                className="mega-featured-shot object-cover"
                aria-hidden={!isActive}
              />
            );
          })}
          <span
            aria-hidden
            className="absolute inset-0 z-[1] bg-[linear-gradient(186deg,rgba(0,0,0,0)_7%,rgba(30,10,18,0.1)_63%)]"
          />
          <span className="absolute bottom-4 left-4 z-[2] inline-flex h-10 items-center gap-2 overflow-hidden rounded-full bg-brand-500 px-4 text-sm leading-5 font-semibold text-white transition-colors group-hover:bg-brand-600 xl:bottom-6 xl:left-6 xl:h-[50px] xl:px-6">
            <span key={active.label} className="mega-featured-label inline-flex items-center gap-2">
              {active.label}
              <ArrowRight aria-hidden className="size-5" strokeWidth={1.6} />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
