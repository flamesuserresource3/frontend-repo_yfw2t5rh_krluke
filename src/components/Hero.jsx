import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-0 pointer-events-none">
        <div className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Open to opportunities
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Hi, I’m <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Your Name</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              A product-focused developer crafting delightful web experiences with React, TypeScript, and modern design systems.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
              >
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:you@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-64 w-64 sm:h-80 sm:w-80 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 p-1 shadow-lg">
              <div className="h-full w-full rounded-2xl bg-white/90 backdrop-blur flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 opacity-90" />
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-gray-500">Bringing ideas to life on the web</p>
          </div>
        </div>
      </div>
    </section>
  );
}
