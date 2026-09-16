import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary: "bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700",
  outline:
    "border border-brand-400 bg-transparent text-brand-500 hover:bg-brand-100 hover:border-brand-500",
  outlineBrand: "border border-brand-400 bg-transparent text-brand-500 hover:bg-brand-100",
  ghost: "text-brand-500 hover:bg-brand-100",
  white: "bg-white text-brand-500 shadow-lift hover:bg-brand-100",
  dark: "bg-ink-900 text-white hover:bg-ink-700",
} as const;

const sizes = {
  xs: "h-9 px-4 text-[13px]",
  sm: "h-10 px-5 text-[13px]",
  md: "h-11 px-6 text-sm",
  lg: "h-[50px] px-6 text-sm",
} as const;

type CommonProps = {
  children: ReactNode;
  className?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  icon?: ReactNode;
  iconBefore?: ReactNode;
};

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
  disabled?: boolean;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const baseClass =
  "group inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold leading-5 transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50";

function ButtonContent({
  children,
  icon,
  iconBefore,
}: {
  children: ReactNode;
  icon?: ReactNode;
  iconBefore?: ReactNode;
}) {
  return (
    <>
      {iconBefore}
      {children}
      {icon ? (
        <span className="inline-flex transition-transform duration-300 ease-out group-hover:-rotate-45">
          {icon}
        </span>
      ) : null}
    </>
  );
}

export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const {
      children,
      className,
      variant = "primary",
      size = "md",
      icon,
      iconBefore,
      href,
      disabled,
    } = props;
    const classes = cn(baseClass, variants[variant], sizes[size], className);
    const content = <ButtonContent icon={icon} iconBefore={iconBefore}>{children}</ButtonContent>;

    if (href.startsWith("/")) {
      return (
        <Link href={href} className={classes} aria-disabled={disabled}>
          {content}
        </Link>
      );
    }

    return (
      <a href={href} className={classes} aria-disabled={disabled}>
        {content}
      </a>
    );
  }

  const {
    children,
    className,
    variant = "primary",
    size = "md",
    icon,
    iconBefore,
    type = "button",
    ...domProps
  } = props;
  const classes = cn(baseClass, variants[variant], sizes[size], className);

  return (
    <button type={type} className={classes} {...domProps}>
      <ButtonContent icon={icon} iconBefore={iconBefore}>{children}</ButtonContent>
    </button>
  );
}
