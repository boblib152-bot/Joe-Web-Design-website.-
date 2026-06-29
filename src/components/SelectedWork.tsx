import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Lumina',
    category: 'Legal Practice / Full-Stack & Booking',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=2000&auto=format&fit=crop',
    year: '2024'
  },
  {
    id: 2,
    title: 'Aether Studios',
    category: 'Architecture Firm / Interactive Portfolio',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2000&auto=format&fit=crop',
    year: '2023'
  },
  {
    id: 3,
    title: 'Vanguard',
    category: 'Financial Advisors / Portal & Custom CMS',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
    year: '2023'
  }
];

export function SelectedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-12 md:py-48 bg-background relative z-10">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-24 flex flex-col items-start justify-between gap-8 border-b border-surface pb-6 md:pb-12 md:flex-row md:items-end sticky top-0 z-30 bg-background md:bg-transparent md:static pt-6 -mt-6 pr-12 md:pr-0 md:pt-0 md:-mt-0"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">Selected <span className="italic text-accent">Works</span></h2>
          <p className="max-w-sm text-muted leading-relaxed text-sm md:text-base">
            A look at premium websites created for professionals, custom-built from front-end to back-end quickly.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex flex-col gap-8 md:gap-16 ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
            >
              <div className="w-full overflow-hidden bg-surface md:w-2/3">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="aspect-[4/3] w-full overflow-hidden"
                >
                  <img 
                    src={project.image} 
                    alt={`Screenshot of ${project.title} - ${project.category}`} 
                    loading="lazy"
                    className="h-full w-full object-cover sepia-[0.3] brightness-75 transition-all duration-700 group-hover:sepia-0 group-hover:brightness-100"
                  />
                </motion.div>
              </div>
              
              <div className="flex w-full flex-col justify-center md:w-1/3">
                <div className="flex items-center justify-between border-b border-surface pb-6">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted">{project.id.toString().padStart(2, '0')}</span>
                  <span className="font-mono text-xs text-muted">{project.year}</span>
                </div>
                <div className="mt-8">
                  <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary">{project.title}</h3>
                  <p className="mt-4 text-sm text-muted">{project.category}</p>
                </div>
                <div className="mt-12">
                  <button className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-primary hover:text-accent transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1">
                    View Project <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
