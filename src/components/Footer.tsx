export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">
            Anurag Kumar
          </h3>

          <p className="text-gray-500 text-sm mt-1">
            Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <a
            href="https://github.com/anurag2417"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume.pdf"
            download
            className="hover:text-white transition"
          >
            Resume
          </a>
        </div>
      </div>

      <div className="pb-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anurag Kumar. All rights reserved.
      </div>
    </footer>
  );
}