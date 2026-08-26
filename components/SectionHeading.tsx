type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-col items-center text-center">
      <span className="mb-3 text-sm font-medium uppercase tracking-widest text-gradient">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base text-muted">{description}</p>
      )}
      <div className="mt-6 h-1 w-16 rounded-full bg-gradient-to-r from-accent-blue to-accent-purple" />
    </div>
  );
}
