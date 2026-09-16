"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { TreatmentsMegaMenu } from "@/components/layout/TreatmentsMegaMenu";
import { navItems } from "@/lib/site";
import { cn } from "@/lib/cn";

export function DesktopNav() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const itemRef = useRef<HTMLLIElement>(null);
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

  return (
    <nav className="hidden lg:block" aria-label="Primary">
      <ul className="flex items-center gap-7">
        {navItems.map((item) => {
          const hasMega = "mega" in item && item.mega;
          const hasChildren = "children" in item;

          if (hasMega) {
            return (
              <li
                key={item.href}
                ref={itemRef}
                className="relative"
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-[3px] text-base font-medium leading-5 transition-colors",
                    open ? "text-brand-500" : "text-ink-900 hover:text-brand-500",
                  )}
                  aria-expanded={open}
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={() => setOpen((value) => !value)}
                  onFocus={openMenu}
                >
                  {item.label}
                  <ChevronDown
                    aria-hidden
                    className={cn("size-5 transition-transform duration-200", open && "rotate-180")}
                    strokeWidth={1.6}
                  />
                </button>

                <div
                  className={cn(
                    "absolute top-full left-1/2 z-50 pt-5 -translate-x-[38%]",
                    open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0",
                  )}
                  onMouseEnter={openMenu}
                  onMouseLeave={scheduleClose}
                >
                  <TreatmentsMegaMenu id={menuId} onNavigate={() => setOpen(false)} />
                </div>
              </li>
            );
          }

          return (
            <li key={item.href} className="relative group/nav">
              <Link
                href={item.href}
                className="flex items-center gap-[3px] text-base font-medium leading-5 text-ink-900 transition-colors hover:text-brand-500"
              >
                {item.label}
                {hasChildren ? (
                  <ChevronDown aria-hidden className="size-5" strokeWidth={1.6} />
                ) : null}
              </Link>

              {hasChildren ? (
                <div className="invisible absolute top-full left-0 z-50 pt-4 opacity-0 transition-opacity group-hover/nav:visible group-hover/nav:opacity-100 group-focus-within/nav:visible group-focus-within/nav:opacity-100">
                  <ul className="min-w-[220px] rounded-2xl bg-white p-3 shadow-lift">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:bg-brand-50 hover:text-brand-500"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
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
