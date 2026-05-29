"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-400 text-lg mb-6"
        >
          Full Stack Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-8xl font-bold tracking-tight mb-8"
        >
          Anurag Kumar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="max-w-3xl mx-auto text-xl md:text-2xl text-gray-400 leading-relaxed mb-12"
        >
          Building scalable web applications with React,
          Next.js, Java and modern web technologies.
          <br />
          <br />
          Currently focused on creating production-ready
          applications and improving problem-solving skills
          through Data Structures and Algorithms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-white/20 rounded-full font-medium hover:border-white/50 transition"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}