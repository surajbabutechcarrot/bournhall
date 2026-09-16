import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { treatmentsMegaMenu } from "@/lib/site";
import { cn } from "@/lib/cn";

type TreatmentsMegaMenuProps = {
  id?: string;
  className?: string;
  onNavigate?: () => void;
};

export function TreatmentsMegaMenu({ id, className, onNavigate }: TreatmentsMegaMenuProps) {
  const { columns, featured } = treatmentsMegaMenu;

  return (
    <div
      id={id}
      className={cn(
        "w-[min(1068px,calc(100vw-2.5rem))] rounded-3xl bg-white px-7 py-8 shadow-lift",
        className,
      )}
    >
      <div className="flex gap-3">
        {columns.map((column) => (
          <div key={column.title} className="flex min-w-0 flex-1 flex-col gap-3">
            <p className="text-base leading-[26px] font-semibold text-brand-500">{column.title}</p>

            <ul className="flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={onNavigate}
                    className="text-sm leading-5 font-medium text-ink-900 transition-colors hover:text-brand-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {"trailing" in column && column.trailing ? (
              <Link
                href={column.trailing.href}
                onClick={onNavigate}
                className="pt-3 text-base leading-[26px] font-semibold text-brand-500 transition-colors hover:text-brand-600"
              >
                {column.trailing.label}
              </Link>
            ) : null}
          </div>
        ))}

        <Link
          href={featured.href}
          onClick={onNavigate}
          className="relative hidden h-[264px] w-[335px] shrink-0 overflow-hidden rounded-3xl sm:block"
        >
          <Image
            src={featured.image.src}
            alt={featured.image.alt}
            fill
            sizes="335px"
            className="object-cover"
          />
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(186deg,rgba(0,0,0,0)_7%,rgba(30,10,18,0.1)_63%)]"
          />
          <span className="absolute bottom-6 left-6 inline-flex h-[50px] items-center gap-2 rounded-full bg-brand-500 px-6 text-sm leading-5 font-semibold text-white transition-colors hover:bg-brand-600">
            {featured.label}
            <ArrowRight aria-hidden className="size-5" strokeWidth={1.6} />
          </span>
        </Link>
      </div>
    </div>
  );
}
