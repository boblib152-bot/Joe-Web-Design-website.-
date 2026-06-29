import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="px-6 pb-6 pt-16 md:px-12 md:pt-24 bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row justify-between gap-16"
        >
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-wide text-primary">Joe.</span>
            <span className="mt-2 text-sm text-muted">Full-Stack Web Developer for Professionals</span>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-surface pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Joe Web Design. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-muted/60">Crafted with precision & intent.</p>
        </div>
      </div>
    </footer>
  );
}
