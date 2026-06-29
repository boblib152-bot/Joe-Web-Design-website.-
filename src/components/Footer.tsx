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
            <span className="mt-2 text-sm text-muted">Independent Digital Designer</span>
          </div>

          <div className="flex gap-16 text-sm text-muted">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted/60">Socials</span>
              <a href="#" className="hover:text-accent transition-colors">Twitter (X)</a>
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs uppercase tracking-widest text-muted/60">Studio</span>
              <a href="#" className="hover:text-accent transition-colors">Awwwards</a>
              <a href="#" className="hover:text-accent transition-colors">Behance</a>
              <a href="#" className="hover:text-accent transition-colors">Dribbble</a>
            </div>
          </div>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between border-t border-surface pt-8 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Joe Web Designer. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-muted/60">Crafted with precision & intent.</p>
        </div>
      </div>
    </footer>
  );
}
