import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import Preloader from "@/components/layout/Preloader";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />

        <section
          id="work"
          className="flex min-h-screen items-center justify-center border-t border-border px-5 md:px-10"
        >
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-text-muted">
            Selected work coming next.
          </p>
        </section>
      </main>
    </>
  );
}