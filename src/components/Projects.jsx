import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern UI Kit',
    description: 'A polished component library built with accessibility-first principles and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Accessibility'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Realtime Dashboard',
    description: 'Live analytics dashboard with websockets, elegant charts, and themeable design.',
    tags: ['Next.js', 'WebSockets', 'Charts'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Headless Commerce',
    description: 'Composable storefront integrating payments, CMS, and search for blazing-fast UX.',
    tags: ['Commerce', 'Performance', 'DX'],
    link: 'https://example.com',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>
          <a
            href="#contact"
            className="text-sm font-semibold text-indigo-600 hover:text-indigo-700"
          >
            Need something similar?
          </a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} target="_blank" rel="noreferrer" className="group rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                  <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                </div>
                <p className="mt-2 text-sm text-gray-600">{p.description}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
