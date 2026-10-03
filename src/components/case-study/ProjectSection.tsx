type ProjectSectionProps = {
  number: string;
  label: string;
  title: string;
  children: React.ReactNode;
};

export default function ProjectSection({
  number,
  label,
  title,
  children,
}: ProjectSectionProps) {
  return (
    <section className="border-b border-border px-5 py-28 md:px-10 md:py-40">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
            {number} / {label}
          </p>
        </div>

        <div className="md:col-span-8 md:col-start-4">
          <h2 className="max-w-[900px] text-[clamp(2.8rem,5.5vw,6rem)] font-medium leading-[0.92] tracking-[-0.06em]">
            {title}
          </h2>

          <div className="mt-12">{children}</div>
        </div>
      </div>
    </section>
  );
}