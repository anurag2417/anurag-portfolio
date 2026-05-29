import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-40"
    >
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-24 items-center">
        <div className="flex justify-center">
          <Image
            src="/images/profile.JPG"
            alt="Anurag Kumar"
            width={550}
            height={550}
            className="rounded-3xl object-cover"
          />
        </div>

        <div>
          <p className="text-gray-400 mb-6">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-10 max-w-4xl">
            I enjoy building software that solves real problems.
          </h2>

          <div className="space-y-8 text-xl text-gray-400 leading-relaxed max-w-3xl">
            <p>
              I'm a Computer Science student and Full Stack Developer
              focused on creating modern web applications using React,
              Next.js, Java, Node.js and databases.
            </p>

            <p>
              Over time I've built projects ranging from finance
              management platforms to coding productivity applications,
              while continuously improving my problem-solving skills
              through Data Structures and Algorithms.
            </p>

            <p>
              My goal is to become a professional software engineer and
              contribute to products that impact thousands of users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}