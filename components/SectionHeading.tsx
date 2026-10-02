type SectionHeadingProps = {
  command: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  command,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 border-b border-border pb-4">
      <p className="mb-2 font-mono text-sm text-accent-green">
        <span className="text-muted">$</span> {command}
      </p>
      <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
