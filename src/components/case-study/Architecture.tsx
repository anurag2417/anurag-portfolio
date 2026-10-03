import type { CaseStudy } from "@/data/caseStudies";

type ArchitectureProps = {
  architecture: CaseStudy["architecture"];
};

export default function Architecture({
  architecture,
}: ArchitectureProps) {
  return (
    <div className="space-y-4">
      {architecture.map((layer, index) => (
        <div
          key={layer.name}
          className="group border border-border bg-surface p-5 transition-colors duration-300 hover:border-text-muted md:p-7"
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-5">
              <span className="font-mono text-[9px] text-accent">
                0{index + 1}
              </span>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.04em]">
                  {layer.name}
                </h3>

                <p className="mt-3 max-w-[520px] text-sm leading-relaxed text-text-muted">
                  {layer.description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 md:max-w-[300px] md:justify-end">
              {layer.technologies.map((technology) => (
                <span
                  key={technology}
                  className="border border-border px-3 py-2 font-mono text-[8px] uppercase tracking-[0.1em] text-text-muted"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}