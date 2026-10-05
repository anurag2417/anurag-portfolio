
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col justify-between overflow-hidden bg-background px-5 py-6 md:px-10 md:py-8">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-primary"
        >
          Anurag
        </Link>

        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          Error / 404
        </span>
      </header>

      <section className="relative z-10 mx-auto w-full max-w-[1440px] py-24">
        <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
          Page not found
        </p>

        <h1 className="text-[clamp(6rem,20vw,18rem)] font-medium uppercase leading-[0.72] tracking-[-0.1em]">
          404<span className="text-accent">.</span>
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-12">
          <p className="max-w-md text-base leading-relaxed text-text-muted md:col-span-5 md:col-start-5 md:text-lg">
            Looks like this page went off-script. The link may be broken, or
            the page may have moved.
          </p>

          <div className="md:col-span-3 md:col-start-10">
            <Link
              href="/"
              className="group inline-flex items-center gap-4 border border-border px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              Back to home
              <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      <footer className="flex items-center justify-between border-t border-border pt-5">
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          Bengaluru, India
        </span>

        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
          End of transmission
        </span>
      </footer>
    </main>
  );
}
