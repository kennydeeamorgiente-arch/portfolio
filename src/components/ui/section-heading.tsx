type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm font-semibold uppercase text-[#a04935]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-[1.08] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-[#5e574d]">{description}</p>
      ) : null}
    </div>
  );
}
