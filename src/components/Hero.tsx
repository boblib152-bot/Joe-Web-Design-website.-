import { motion } from 'motion/react';

export function Hero() {
  const transition = { duration: 1.2, ease: [0.22, 1, 0.36, 1] };

  return (
    <section className="relative flex min-h-screen flex-col justify-center px-6 md:px-12 overflow-hidden">
      {/* Subtle artsy gradient blob in the background */}
      <div className="absolute top-0 right-0 -z-10 h-[800px] w-[800px] -translate-y-1/3 translate-x-1/3 rounded-full bg-accent/10 blur-[120px] mix-blend-screen pointer-events-none"></div>
      
      <div className="max-w-7xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transition, delay: 0.2 }}
          className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-muted"
        >
          Joe Web Designer
        </motion.p>
        
        <h1 className="font-serif text-5xl leading-[1.1] tracking-tight md:text-7xl lg:text-9xl">
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transition}
            className="block"
          >
            High-end design.
          </motion.span>
          <motion.span 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="block text-accent italic"
          >
            Zero friction.
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...transition, delay: 0.8 }}
          className="mt-16 flex max-w-xl flex-col gap-6 md:mt-24 md:flex-row md:items-center md:gap-12"
        >
          <p className="text-lg leading-relaxed text-muted">
            You run your business. I build your bespoke, seamlessly animated digital presence—completely hands-off from start to finish.
          </p>
          <div className="h-[1px] flex-1 bg-surface md:h-12 md:w-[1px] md:flex-none border-l border-muted/20"></div>
          <a href="#contact" className="group flex items-center gap-3 text-sm font-medium uppercase tracking-wider text-primary transition-colors hover:text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            Start a Conversation
          </a>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-6 flex items-center gap-4 text-xs tracking-widest uppercase text-muted md:left-12"
      >
        <span className="h-12 w-[1px] bg-muted/30"></span>
        Scroll to explore
      </motion.div>
    </section>
  );
}
