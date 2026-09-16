"use client";

import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRight, CalendarDays, ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { navItems, site, treatmentsMegaMenu } from "@/lib/site";
import { cn } from "@/lib/cn";

function isNavActive(
  pathname: string,
  href: string,
  children?: readonly { href: string }[],
) {
  const cleanHref = href.split("#")[0];

  if (pathname === cleanHref) return true;

  if (cleanHref !== "/" && pathname.startsWith(`${cleanHref}/`)) {
    return true;
  }

  if (children?.length) {
    return children.some((child) => {
      const childHref = child.href.split("#")[0];
      return (
        pathname === childHref ||
        (childHref !== "/" && pathname.startsWith(`${childHref}/`))
      );
    });
  }

  return false;
}

type AccordionKey = "treatments" | "accreditation" | "costs" | null;

type MobileNavProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function MobileNav({ open: controlledOpen, onOpenChange }: MobileNavProps = {}) {
  const pathname = usePathname();
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = typeof controlledOpen === "boolean";
  const open = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = (value: boolean | ((prev: boolean) => boolean)) => {
    const nextValue = typeof value === "function" ? value(open) : value;
    if (!isControlled) {
      setUncontrolledOpen(nextValue);
    }
    if (typeof onOpenChange === "function") {
      onOpenChange(nextValue);
    }
  };

  const [mounted, setMounted] = useState(false);
  const [accordion, setAccordion] = useState<AccordionKey>(null);
  const panelId = useId();

  const close = () => {
    setOpen(false);
    setAccordion(null);
  };

  const toggle = () => {
    if (open) setAccordion(null);
    setOpen(!open);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const toggleAccordion = (key: AccordionKey) => {
    setAccordion((current) => (current === key ? null : key));
  };

  // Portaled outside the blurred header so `fixed` is viewport-relative.
  const overlay =
    mounted && open
      ? createPortal(
          <div className="lg:hidden">
            <div
              aria-hidden
              className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-[55] bg-ink-950/40 backdrop-blur-sm"
              onClick={close}
            />

            <div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-[56] flex flex-col bg-white"
            >
              <div className="flex min-h-0 flex-1 flex-col bg-[linear-gradient(180deg,#ffffff_0%,#faf7fc_100%)]">
                <nav
                  aria-label="Mobile"
                  className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 pt-2 pb-6"
                >
                  <ul className="divide-y divide-ink-200/80">
                    {navItems.map((item) => {
                      const hasMega = "mega" in item && item.mega;
                      const children = "children" in item ? item.children : undefined;
                      const active = isNavActive(pathname, item.href, children);

                      if (hasMega) {
                        const isOpen = accordion === "treatments";
                        return (
                          <li key={item.href}>
                            <button
                              type="button"
                              className={cn(
                                "flex w-full items-center justify-between gap-3 py-4 text-left text-lg font-medium transition-colors",
                                active ? "font-semibold text-brand-500" : "text-ink-900",
                              )}
                              aria-expanded={isOpen}
                              onClick={() => toggleAccordion("treatments")}
                            >
                              {item.label}
                              <ChevronDown
                                aria-hidden
                                className={cn(
                                  "size-5 shrink-0 text-brand-500 transition-transform duration-300",
                                  isOpen && "rotate-180",
                                )}
                                strokeWidth={1.6}
                              />
                            </button>

                            <div
                              className={cn(
                                "grid transition-[grid-template-rows] duration-300 ease-out",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                              )}
                            >
                              <div className="overflow-hidden">
                                <div className="space-y-5 pb-5">
                                  {treatmentsMegaMenu.columns.map((column) => (
                                    <div key={column.title}>
                                      <p className="mb-2 text-xs font-semibold tracking-[0.08em] text-brand-500 uppercase">
                                        {column.title}
                                      </p>
                                      <ul className="space-y-0.5">
                                        {column.links.map((link) => {
                                          const isLinkActive = pathname === link.href;
                                          return (
                                            <li key={link.label}>
                                              <Link
                                                href={link.href}
                                                className={cn(
                                                  "block rounded-lg py-2.5 text-[15px] font-medium transition-colors hover:text-brand-500",
                                                  isLinkActive
                                                    ? "bg-brand-50 font-semibold text-brand-500 px-3"
                                                    : "text-ink-700",
                                                )}
                                                onClick={close}
                                                aria-current={isLinkActive ? "page" : undefined}
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
                                          className="mt-1 inline-flex items-center gap-1.5 py-2 text-[15px] font-semibold text-brand-500"
                                          onClick={close}
                                        >
                                          {column.trailing.label}
                                          <ArrowRight
                                            aria-hidden
                                            className="size-4"
                                            strokeWidth={1.6}
                                          />
                                        </Link>
                                      ) : null}
                                    </div>
                                  ))}

                                  <Link
                                    href={treatmentsMegaMenu.featured.href}
                                    onClick={close}
                                    className="group relative block h-[148px] overflow-hidden rounded-2xl"
                                  >
                                    <Image
                                      src={treatmentsMegaMenu.featured.image.src}
                                      alt={treatmentsMegaMenu.featured.image.alt}
                                      fill
                                      sizes="(max-width: 1024px) 100vw, 400px"
                                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <span
                                      aria-hidden
                                      className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/15 to-transparent"
                                    />
                                    <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4 text-sm font-semibold text-white">
                                      {treatmentsMegaMenu.featured.label}
                                      <span className="grid size-9 place-items-center rounded-full bg-brand-500">
                                        <ArrowRight
                                          aria-hidden
                                          className="size-4"
                                          strokeWidth={1.75}
                                        />
                                      </span>
                                    </span>
                                  </Link>

                                  <Link
                                    href={item.href}
                                    onClick={close}
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-500"
                                  >
                                    View all treatments
                                    <ArrowRight aria-hidden className="size-4" strokeWidth={1.6} />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      }

                      if (children?.length) {
                        const key: AccordionKey =
                          item.label === "Accreditation" ? "accreditation" : "costs";
                        const isOpen = accordion === key;

                        return (
                          <li key={item.href}>
                            <button
                              type="button"
                              className={cn(
                                "flex w-full items-center justify-between gap-3 py-4 text-left text-lg font-medium transition-colors",
                                active ? "font-semibold text-brand-500" : "text-ink-900",
                              )}
                              aria-expanded={isOpen}
                              onClick={() => toggleAccordion(key)}
                            >
                              {item.label}
                              <ChevronDown
                                aria-hidden
                                className={cn(
                                  "size-5 shrink-0 text-brand-500 transition-transform duration-300",
                                  isOpen && "rotate-180",
                                )}
                                strokeWidth={1.6}
                              />
                            </button>

                            <div
                              className={cn(
                                "grid transition-[grid-template-rows] duration-300 ease-out",
                                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                              )}
                            >
                              <div className="overflow-hidden">
                                <ul className="space-y-0.5 pb-4">
                                  {children.map((child) => {
                                    const isChildActive = pathname === child.href.split("#")[0];
                                    return (
                                      <li key={child.href + child.label}>
                                        <Link
                                          href={child.href}
                                          className={cn(
                                            "block rounded-lg py-2.5 text-[15px] font-medium transition-colors hover:text-brand-500",
                                            isChildActive
                                              ? "bg-brand-50 font-semibold text-brand-500 px-3"
                                              : "text-ink-700",
                                          )}
                                          onClick={close}
                                          aria-current={isChildActive ? "page" : undefined}
                                        >
                                          {child.label}
                                        </Link>
                                      </li>
                                    );
                                  })}
                                </ul>
                              </div>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li key={item.href}>
                          <Link
                            href={item.href}
                            className={cn(
                              "block py-4 text-lg font-medium transition-colors",
                              active
                                ? "font-semibold text-brand-500"
                                : "text-ink-900 hover:text-brand-500",
                            )}
                            onClick={close}
                            aria-current={active ? "page" : undefined}
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-6 flex items-center justify-between rounded-2xl border border-brand-100 bg-white px-4 py-3 sm:hidden">
                    <span className="text-sm font-medium text-ink-700">Language</span>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-brand-500"
                      aria-label="Language: English"
                    >
                      EN
                      <ChevronDown aria-hidden className="size-4" strokeWidth={1.6} />
                    </button>
                  </div>
                </nav>

                <div className="shrink-0 border-t border-brand-100 bg-white px-5 pt-4 pb-[max(1rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_-16px_rgb(36_26_40_/_0.18)]">
                  <div onClick={close}>
                    <Button
                      href="/book-appointment"
                      size="lg"
                      className="w-full"
                      iconBefore={<CalendarDays aria-hidden className="size-5" strokeWidth={1.6} />}
                    >
                      Book a Consultation
                    </Button>
                  </div>
                  <a
                    href={site.phoneHref}
                    className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-brand-500 transition-colors hover:text-brand-600"
                  >
                    <Phone aria-hidden className="size-4" strokeWidth={1.75} />
                    Toll free {site.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="relative z-[60] grid size-10 place-items-center rounded-full text-ink-800 transition-colors hover:bg-brand-50 active:bg-brand-100"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={toggle}
      >
        {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
      </button>
      {overlay}
    </div>
  );
}
