import { Code, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'FastAPI',
    'MongoDB',
    'Framer Motion',
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 flex items-center gap-2">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                <Sparkles className="h-5 w-5" />
              </span>
              About Me
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              I’m a front-end developer focused on creating fast, accessible, and visually appealing interfaces.
              I love working closely with product teams to design and ship features that users enjoy.
            </p>
            <p className="mt-3 text-gray-600 leading-relaxed">
              My toolkit blends strong UI foundations with modern engineering practices. I care about detail,
              maintainable architecture, and thoughtful micro-interactions.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-violet-50 text-violet-600">
                <Code className="h-4 w-4" />
              </span>
              Skills
            </h3>
            <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {skills.map((skill) => (
                <li key={skill} className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
