import { motion } from 'motion/react';
import { Menu } from 'lucide-react';

export function Navbar() {
  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute md:fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-primary md:px-12 pointer-events-none md:pointer-events-auto"
      >
        <div className="font-serif text-2xl font-medium tracking-wide pointer-events-auto">
          Joe.
        </div>
        
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {['Work', 'Process', 'Studio', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden text-primary hover:text-accent transition-colors">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
              <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0">{item}</span>
            </a>
          ))}
        </div>
      </motion.nav>

      <motion.button 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-6 right-6 z-50 md:hidden mix-blend-difference text-primary hover:text-accent transition-colors pointer-events-auto"
      >
        <Menu className="h-6 w-6" />
      </motion.button>
    </>
  );
}
