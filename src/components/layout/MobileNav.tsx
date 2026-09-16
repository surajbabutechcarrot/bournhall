"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { navItems, treatmentsMegaMenu } from "@/lib/site";
import { cn } from "@/lib/cn";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  const close = () => {
    setOpen(false);
    setTreatmentsOpen(false);
  };

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="grid size-10 place-items-center rounded-full text-ink-800"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-68px)] overflow-y-auto border-t border-brand-100 bg-white px-5 py-5 shadow-lift"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {navItems.map((item) => {
                const hasMega = "mega" in item && item.mega;

                if (hasMega) {
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50"
                        aria-expanded={treatmentsOpen}
                        onClick={() => setTreatmentsOpen((value) => !value)}
                      >
                        {item.label}
                        <ChevronDown
                          aria-hidden
                          className={cn(
                            "size-4 transition-transform",
                            treatmentsOpen && "rotate-180",
                          )}
                        />
                      </button>

                      {treatmentsOpen ? (
                        <div className="space-y-4 border-l border-brand-100 py-2 pl-4">
                          {treatmentsMegaMenu.columns.map((column) => (
                            <div key={column.title}>
                              <p className="px-3 pb-1 text-xs font-semibold tracking-wide text-brand-500 uppercase">
                                {column.title}
                              </p>
                              <ul>
                                {column.links.map((link) => (
                                  <li key={link.label}>
                                    <Link
                                      href={link.href}
                                      className="block rounded-xl px-3 py-2 text-sm text-ink-700 hover:bg-brand-50"
                                      onClick={close}
                                    >
                                      {link.label}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                              {"trailing" in column && column.trailing ? (
                                <Link
                                  href={column.trailing.href}
                                  className="mt-1 block rounded-xl px-3 py-2 text-sm font-semibold text-brand-500 hover:bg-brand-50"
                                  onClick={close}
                                >
                                  {column.trailing.label}
                                </Link>
                              ) : null}
                            </div>
                          ))}
                          <Link
                            href={treatmentsMegaMenu.featured.href}
                            className="block rounded-xl px-3 py-2 text-sm font-semibold text-brand-500 hover:bg-brand-50"
                            onClick={close}
                          >
                            {treatmentsMegaMenu.featured.label}
                          </Link>
                        </div>
                      ) : null}
                    </li>
                  );
                }

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block rounded-xl px-3 py-3 text-sm font-medium text-ink-700 hover:bg-brand-50"
                      onClick={close}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="mt-4 flex items-center justify-between gap-3">
            <Logo href="/" size="sm" />
            <Button href="/book-appointment" size="sm">
              Book Appointment
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
