import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-5 pb-6 pt-12 md:px-10 md:pb-8">
      <div className="mx-auto w-full max-w-[1440px] border-t border-border pt-5">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
              © 2026 Anurag
            </span>

            <span className="hidden h-1 w-1 rounded-full bg-border md:block" />

            <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted">
              Bengaluru, India
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="#work"
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
            >
              Work
            </Link>

            <Link
              href="#about"
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
            >
              About
            </Link>

            <Link
              href="#contact"
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-text-primary"
            >
              Contact
            </Link>

            <Link
              href="#"
              className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-muted transition-colors hover:text-accent"
            >
              Top ↑
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}