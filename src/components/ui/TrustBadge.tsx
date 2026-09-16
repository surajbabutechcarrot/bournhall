import Image from "next/image";
import { cn } from "@/lib/cn";

type TrustBadgeProps = {
  avatars: readonly { src: string; alt: string }[];
  title?: string;
  count?: string;
  label?: string;
  subtitle: string;
  className?: string;
};

export function TrustBadge({
  avatars,
  title,
  count,
  label,
  subtitle,
  className,
}: TrustBadgeProps) {
  let displayCount = count;
  let displayLabel = label;

  if (!displayCount && title) {
    const spaceIndex = title.indexOf(" ");
    if (spaceIndex !== -1) {
      displayCount = title.slice(0, spaceIndex);
      displayLabel = title.slice(spaceIndex + 1);
    } else {
      displayCount = title;
    }
  }

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <ul className="flex items-center">
        {avatars.map((avatar, index) => (
          <li key={avatar.src + index} className={cn(index > 0 && "-ml-5")}>
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={60}
              height={60}
              sizes="60px"
              className="size-[60px] rounded-full border-2 border-white bg-[#f2e5ea] object-cover object-top"
            />
          </li>
        ))}
      </ul>
      <div className="flex flex-col gap-[5px]">
        <p className="text-[22px] leading-5 text-brand-500">
          {displayCount ? <span className="font-bold">{displayCount} </span> : null}
          {displayLabel ? <span className="font-medium">{displayLabel}</span> : null}
        </p>
        <p className="text-sm leading-5 text-brand-600">{subtitle}</p>
      </div>
    </div>
  );
}
