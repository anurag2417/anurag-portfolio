export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-40"
    >
      <div className="max-w-4xl">
        <p className="text-gray-400 mb-4">
          Contact
        </p>

        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Let's build something together.
        </h2>

        <p className="text-xl text-gray-400 leading-relaxed mb-16">
          I'm always interested in discussing software
          engineering, web development, internships,
          freelance opportunities, and exciting projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <a
            href="mailto:anurag18.work@gmail.com"
            className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <p className="text-gray-400 mb-2">
              Email
            </p>

            <h3 className="text-xl font-semibold">
              anurag18.work@gmail.com
            </h3>
          </a>

          <a
            href="https://github.com/anurag2417"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <p className="text-gray-400 mb-2">
              GitHub
            </p>

            <h3 className="text-xl font-semibold">
              github.com/anurag2417
            </h3>
          </a>

          <a
            href="https://www.linkedin.com/in/anurag-kumar-318a853aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <p className="text-gray-400 mb-2">
              LinkedIn
            </p>

            <h3 className="text-xl font-semibold">
              Connect on LinkedIn
            </h3>
          </a>

          <a
            href="/resume.pdf"
            download
            className="border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-300"
          >
            <p className="text-gray-400 mb-2">
              Resume
            </p>

            <h3 className="text-xl font-semibold">
              Download Resume
            </h3>
          </a>
        </div>
      </div>
    </section>
  );
}