type NumberedStep = {
  title: string;
  body: string;
};

export function NumberedSteps({ steps }: { steps: readonly NumberedStep[] }) {
  return (
    <ol className="mt-8 space-y-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-[20px] bg-petal-50 px-4 py-4 sm:gap-5 sm:px-5 sm:py-5"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-semibold text-white sm:size-12 sm:text-base">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="min-w-0 pt-0.5">
            <h3 className="text-base font-semibold text-ink-950 sm:text-lg">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-ink-600 sm:text-[15px] sm:leading-7">
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
