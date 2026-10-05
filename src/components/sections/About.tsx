import Image from "next/image";

const facts = [
  {
    label: "Based",
    value: "Bengaluru, India",
  },
  {
    label: "Focus",
    value: "Product & Web",
  },
  {
    label: "Currently",
    value: "Building",
  },
  {
    label: "Interests",
    value: "Code / Film / 3D",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-border px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              05 / About
            </p>
          </div>

          <div className="md:col-span-9 md:col-start-4">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
              <div className="md:col-span-8">
                <h2 className="text-[clamp(3rem,6vw,6rem)] font-medium leading-[0.88] tracking-[-0.06em]">
                  I build,
                  <br />
                  experiment,
                  <br />
                  and keep learning.
                </h2>

                <div className="mt-10 max-w-[680px] space-y-6 text-base leading-relaxed text-text-muted md:text-lg">
                  <p>
                    I&apos;m a developer focused on building digital products
                    that are useful, technically solid, and enjoyable to use.
                  </p>

                  <p>
                    My work sits somewhere between engineering and creative
                    development. I enjoy taking an idea from a rough concept,
                    through architecture and interface design, to something
                    people can actually use.
                  </p>

                  <p>
                    Outside the code, I&apos;m interested in visual storytelling,
                    motion, 3D, and the small details that make a digital
                    experience feel considered.
                  </p>
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="relative aspect-[4/5] overflow-hidden border border-border bg-surface">
                  <Image
                    src="https://ik.imagekit.io/djimomx5ff/IMG_7558.JPG"
                    alt="Portrait of Anurag"
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1440px) 33vw, 400px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  />

                  <div className="pointer-events-none absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/70">
                        Portrait
                      </span>

                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    </div>

                    <div className="flex justify-between border-t border-white/20 pt-4">
                      <span className="font-mono text-[9px] text-white/70">
                        01
                      </span>

                      <span className="font-mono text-[9px] text-white/70">
                        2026
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 grid grid-cols-2 border-y border-border md:grid-cols-4">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-border px-0 py-6 odd:border-r md:border-b-0 md:border-r md:px-6 md:first:pl-0 md:last:border-r-0"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
                    {fact.label}
                  </p>

                  <p className="mt-3 text-sm text-text-primary">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
