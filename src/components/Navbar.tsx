import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = ['Process', 'FAQs', 'Contact'];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute md:fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 mix-blend-difference text-primary md:px-12 pointer-events-none md:pointer-events-auto"
      >
        <div className="font-serif text-2xl font-medium tracking-wide pointer-events-auto cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1">
          <a href="#" className="focus-visible:outline-none">Joe.</a>
        </div>
        
        <div className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {menuItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="group relative overflow-hidden text-primary hover:text-accent transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
            >
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">{item}</span>
              <span className="absolute inset-0 inline-block translate-y-full transition-transform duration-300 group-hover:translate-y-0 text-accent font-medium">{item}</span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* Hamburger / Close Button for Mobile */}
      <motion.button 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        onClick={toggleMobileMenu}
        className="fixed top-6 right-6 z-50 md:hidden mix-blend-difference text-primary hover:text-accent transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </motion.button>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 py-12 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {menuItems.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  key={item}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="font-serif text-4xl font-medium tracking-wide text-primary hover:text-accent active:text-accent transition-colors duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-2 py-1 block"
                  >
                    {item}
                  </a>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-12 left-8 text-xs text-muted font-mono uppercase tracking-widest"
            >
              © {new Date().getFullYear()} Joe Web Design
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
