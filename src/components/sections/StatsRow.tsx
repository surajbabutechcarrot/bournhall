import { Fragment } from "react";
import { stats } from "@/content/site-content";

export function StatsRow() {
  return (
    <dl className="mt-12 flex flex-col items-center gap-8 lg:mt-[72px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
      {stats.map((stat, index) => (
        <Fragment key={stat.label}>
          {index > 0 ? (
            <span aria-hidden className="hidden h-[45px] w-px shrink-0 bg-ink-200 lg:block" />
          ) : null}
          <div className="flex items-center gap-4 lg:gap-8">
            <dd className="text-4xl leading-[34px] text-ink-950 lg:text-[54px]">{stat.value}</dd>
            <dt className="text-lg leading-[34px] text-ink-950 lg:text-[22px]">{stat.label}</dt>
          </div>
        </Fragment>
      ))}
    </dl>
  );
}
