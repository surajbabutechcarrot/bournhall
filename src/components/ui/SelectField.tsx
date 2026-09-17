"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
} from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectFieldProps = {
  name: string;
  label: string;
  placeholder: string;
  options: SelectOption[];
  required?: boolean;
  className?: string;
};

export function SelectField({
  name,
  label,
  placeholder,
  options,
  required,
  className,
}: SelectFieldProps) {
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [highlight, setHighlight] = useState(0);

  const selected = options.find((option) => option.value === value);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const index = Math.max(
      0,
      options.findIndex((option) => option.value === value),
    );
    setHighlight(index === -1 ? 0 : index);
    const frame = requestAnimationFrame(() => {
      listRef.current?.focus();
    });
    return () => cancelAnimationFrame(frame);
  }, [open, options, value]);

  const choose = (next: string) => {
    setValue(next);
    setOpen(false);
  };

  const onTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  };

  const onListKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setHighlight((current) => (current + 1) % options.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setHighlight((current) => (current - 1 + options.length) % options.length);
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      const option = options[highlight];
      if (option) choose(option.value);
    } else if (event.key === "Home") {
      event.preventDefault();
      setHighlight(0);
    } else if (event.key === "End") {
      event.preventDefault();
      setHighlight(options.length - 1);
    }
  };

  return (
    <div ref={rootRef} className={cn("relative grid gap-2", className)}>
      <span className="text-sm font-medium text-ink-900" id={`${listId}-label`}>
        {label}
      </span>

      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-labelledby={`${listId}-label`}
        aria-controls={listId}
        onClick={() => setOpen((current) => !current)}
        onKeyDown={onTriggerKeyDown}
        className={cn(
          "flex h-[52px] w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 text-left text-[15px] leading-5 outline-none transition-all",
          open
            ? "border-brand-400 shadow-[0_0_0_3px_rgba(125,21,81,0.08)]"
            : "border-[#e6dde3] hover:border-[#d4c6ce] focus:border-brand-400 focus:shadow-[0_0_0_3px_rgba(125,21,81,0.08)] focus-visible:border-brand-400 focus-visible:shadow-[0_0_0_3px_rgba(125,21,81,0.08)] focus-visible:outline-none",
          selected ? "text-ink-900" : "text-[#9a9096]",
        )}
      >
        <span className="min-w-0 truncate">{selected?.label ?? placeholder}</span>
        <ChevronDown
          aria-hidden
          className={cn(
            "size-4 shrink-0 text-[#8a7f86] transition-transform duration-200",
            open && "rotate-180 text-brand-500",
          )}
          strokeWidth={1.8}
        />
      </button>

      {open ? (
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          tabIndex={-1}
          aria-labelledby={`${listId}-label`}
          onKeyDown={onListKeyDown}
          data-lenis-prevent
          className="absolute top-[calc(100%+0.4rem)] right-0 left-0 z-30 max-h-56 overflow-auto overscroll-contain rounded-2xl border border-[#efe6eb] bg-white p-1.5 shadow-[0_18px_40px_-20px_rgba(36,26,40,0.35)] outline-none"
        >
          {options.map((option, index) => {
            const isSelected = option.value === value;
            const isActive = index === highlight;

            return (
              <li key={option.value} role="option" aria-selected={isSelected}>
                <button
                  type="button"
                  onMouseEnter={() => setHighlight(index)}
                  onClick={() => choose(option.value)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-left text-[15px] leading-5 transition-colors",
                    isSelected || isActive
                      ? "bg-brand-50 text-brand-500"
                      : "text-ink-900 hover:bg-[#faf6f8]",
                  )}
                >
                  <span className="min-w-0 truncate font-medium">{option.label}</span>
                  {isSelected ? (
                    <Check aria-hidden className="size-4 shrink-0" strokeWidth={2.2} />
                  ) : null}
                </button>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
