import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

const sizes = {
  sm: { className: "h-7", width: 134, height: 35 },
  md: { className: "h-9", width: 172, height: 45 },
  lg: { className: "h-11", width: 210, height: 55 },
} as const;

type LogoProps = {
  href?: string;
  className?: string;
  inverted?: boolean;
  size?: keyof typeof sizes;
  priority?: boolean;
};

export function Logo({
  href = "/",
  className,
  inverted = false,
  size = "md",
  priority = false,
}: LogoProps) {
  const { className: sizeClass, width, height } = sizes[size];

  const mark = (
    <Image
      src={inverted ? "/images/logo-white.png" : "/images/logo.png"}
      alt="Bourn Hall Fertility Clinic"
      width={width}
      height={height}
      priority={priority}
      className={cn("w-auto object-contain", sizeClass, className)}
    />
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="Bourn Hall home" className="inline-flex shrink-0">
      {mark}
    </Link>
  );
}
