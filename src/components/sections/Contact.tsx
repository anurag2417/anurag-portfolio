import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-border px-5 pb-10 pt-28 md:px-10 md:pb-12 md:pt-40"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-muted">
              06 / Contact
            </p>
          </div>

          <div className="md:col-span-10 md:col-start-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
              Have a project in mind?
            </p>

            <h2 className="mt-7 text-[clamp(3.5rem,9vw,10rem)] font-medium leading-[0.8] tracking-[-0.08em]">
              Let&apos;s make
              <br />
              something.
            </h2>

            <div className="mt-16">
              <a
                href="mailto:anurag18.work@gmail.com"
                data-cursor="view"
                className="group block border-y border-border py-8 md:py-10"
              >
                <div className="flex items-center justify-between gap-5">
                  <span className="break-all text-[clamp(1.3rem,3.5vw,4rem)] font-medium tracking-[-0.05em] transition-colors duration-500 group-hover:text-accent">
                    anurag18.work@gmail.com
                  </span>

                  <span className="shrink-0 text-2xl text-text-muted transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:text-accent md:text-4xl">
                    ↗
                  </span>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="https://github.com/anurag2417"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
              >
                GitHub ↗
              </Link>

              <Link
                href="https://www.linkedin.com/in/anurag-kumar-318a853aa/"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
              >
                LinkedIn ↗
              </Link>

              <Link
                href="https://x.com/anuragk_x"
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
              >
                X ↗
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}