import { motion } from 'motion/react';

const expertises = [
  {
    title: 'Bespoke Art Direction',
    description: 'We establish a cohesive, premium aesthetic that elevates your brand—without requiring endless revisions or micromanagement from you.'
  },
  {
    title: 'Turnkey Development',
    description: 'I bring designs to life with fluid animations and robust, scalable code. A completely hands-off, end-to-end development cycle.'
  },
  {
    title: 'Zero-Friction Launch',
    description: 'From domain setup to hosting and technical SEO optimization, everything is handled. You just step back and enjoy the final product.'
  }
];

export function Expertise() {
  return (
    <section id="process" className="bg-surface py-32 px-6 md:px-12 md:py-48 relative overflow-hidden">
      {/* Subtle accent glow */}
      <div className="absolute top-1/2 left-0 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-24 sticky top-0 z-30 bg-surface md:bg-transparent md:static pt-6 -mt-6 pr-12 md:pr-0 md:pt-0 md:-mt-0 pb-4 md:pb-0"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">Effortless <span className="italic text-accent">Process</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-6 border-t border-muted/20 pt-8"
            >
              <h3 className="font-serif text-2xl text-primary">{item.title}</h3>
              <p className="leading-relaxed text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
