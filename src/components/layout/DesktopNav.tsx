"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { TreatmentsMegaMenu } from "@/components/layout/TreatmentsMegaMenu";
import { Container } from "@/components/ui/Container";
import { navItems } from "@/lib/site";
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

export function DesktopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const itemRef = useRef<HTMLLIElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openMenu = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!itemRef.current?.contains(event.target as Node)) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("mousedown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("mousedown", onPointerDown);
    };
  }, [open]);

  useEffect(() => () => clearCloseTimer(), []);

  // Keep the panel flush under the live header height (scales with density tokens).
  useLayoutEffect(() => {
    if (!open || !panelRef.current) return;

    const syncTop = () => {
      const header = document.querySelector("header");
      const headerH = header?.getBoundingClientRect().height ?? 64;
      panelRef.current?.style.setProperty("top", `${headerH}px`);
    };

    syncTop();
    window.addEventListener("resize", syncTop);
    window.visualViewport?.addEventListener("resize", syncTop);
    return () => {
      window.removeEventListener("resize", syncTop);
      window.visualViewport?.removeEventListener("resize", syncTop);
    };
  }, [open]);

  return (
    <nav className="hidden min-w-0 lg:block" aria-label="Primary">
      <ul className="flex items-center gap-3 xl:gap-5 min-[1512px]:gap-7">
        {navItems.map((item) => {
          const hasMega = "mega" in item && item.mega;
          const hasChildren = "children" in item;
          const active = isNavActive(
            pathname,
            item.href,
            hasChildren ? item.children : undefined,
          );

          if (hasMega) {
            return (
              <li
                key={item.href}
                ref={itemRef}
                className="relative shrink-0"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={cn(
                    "relative flex items-center gap-[3px] py-1 whitespace-nowrap text-sm font-medium leading-5 transition-colors xl:text-base",
                    active
                      ? "font-semibold text-brand-500"
                      : open
                        ? "text-brand-500"
                        : "text-ink-900 hover:text-brand-500",
                  )}
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen((value) => !value)}
                  onFocus={openMenu}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-200 xl:size-5",
                      open && "rotate-180",
                      active || open ? "text-brand-500" : "text-ink-700",
                    )}
                    strokeWidth={active ? 2 : 1.6}
                  />
                  {active ? (
                    <span
                      aria-hidden
                      className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-brand-500"
                    />
                  ) : null}
                </button>

                {/*
                  Fixed + container-aligned so the panel never clips off the left
                  edge on 125%/150% Windows scale (narrower CSS viewports).
                */}
                <div
                  ref={panelRef}
                  data-open={open ? "true" : "false"}
                  className={cn(
                    "mega-menu-shell fixed inset-x-0 z-50",
                    open ? "pointer-events-auto" : "pointer-events-none",
                  )}
                  style={{ top: "var(--header-h)" }}
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <Container className="pt-2 pb-2">
                    <TreatmentsMegaMenu
                      id={menuId}
                      open={open}
                      className="w-full max-w-[min(1068px,100%)]"
                      onNavigate={() => setOpen(false)}
                    />
                  </Container>
                </div>
              </li>
            );
          }

          return (
            <li key={item.href} className="relative shrink-0 group/nav">
              <Link
                href={item.href}
                className={cn(
                  "relative flex items-center gap-[3px] py-1 whitespace-nowrap text-sm font-medium leading-5 transition-colors xl:text-base",
                  active
                    ? "font-semibold text-brand-500"
                    : "text-ink-900 hover:text-brand-500",
                )}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {hasChildren ? (
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-4 shrink-0 transition-transform duration-200 xl:size-5",
                      active ? "text-brand-500" : "text-ink-700",
                    )}
                    strokeWidth={active ? 2 : 1.6}
                  />
                ) : null}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute -bottom-1.5 left-0 right-0 h-[2.5px] rounded-full bg-brand-500"
                  />
                ) : null}
              </Link>

              {hasChildren ? (
                <div className="invisible absolute top-full left-0 z-50 pt-4 opacity-0 transition-opacity group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  <ul className="min-w-[220px] rounded-2xl bg-white p-3 shadow-lift">
                    {item.children.map((child) => {
                      const isChildActive =
                        pathname === child.href.split("#")[0];
                      return (
                        <li key={child.href + child.label}>
                          <Link
                            href={child.href}
                            className={cn(
                              "block rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                              isChildActive
                                ? "bg-brand-50 font-semibold text-brand-500"
                                : "text-ink-900 hover:bg-brand-50 hover:text-brand-500",
                            )}
                            aria-current={isChildActive ? "page" : undefined}
                          >
                            {child.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
