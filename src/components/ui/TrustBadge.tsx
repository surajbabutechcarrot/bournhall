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
    <div
      className={cn(
        "flex max-w-full flex-col items-start gap-4 md:flex-row md:items-center md:gap-3",
        className,
      )}
    >
      <ul className="flex shrink-0 items-center">
        {avatars.map((avatar, index) => (
          <li key={avatar.src + index} className={cn(index > 0 && "-ml-4 md:-ml-5")}>
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={60}
              height={60}
              sizes="(max-width: 768px) 48px, 60px"
              className="size-12 rounded-full border-2 border-white bg-[#f2e5ea] object-cover object-top md:size-[60px]"
            />
          </li>
        ))}
      </ul>
      <div className="min-w-0 flex-1">
        <p className="text-lg leading-snug text-brand-500 md:text-[22px] md:leading-5">
          {displayCount ? <span className="font-bold">{displayCount} </span> : null}
          {displayLabel ? <span className="font-medium">{displayLabel}</span> : null}
        </p>
        <p className="mt-1 text-sm leading-5 text-brand-600">{subtitle}</p>
      </div>
    </div>
  );
}
