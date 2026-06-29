import { motion } from 'motion/react';
import { useState, FormEvent } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-32 md:px-12 md:py-48 bg-surface relative z-10 border-t border-background/20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24 justify-between">
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2 sticky top-0 z-30 bg-surface md:bg-transparent md:static pt-6 -mt-6 pr-12 md:pr-0 md:pt-0 md:-mt-0 pb-4 md:pb-0"
          >
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight text-primary">
              Let's build your <span className="italic text-accent">website.</span>
            </h2>
            <p className="mt-8 text-lg text-muted max-w-md leading-relaxed">
              Ready to launch your practice's custom website quickly? Let's discuss your project.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:w-1/2 max-w-xl"
          >
            {submitted ? (
              <div className="h-full flex flex-col justify-center items-start bg-background p-12 rounded-sm border border-muted/20">
                <CheckCircle2 className="h-12 w-12 text-accent mb-6" />
                <h3 className="font-serif text-3xl text-primary mb-4">Message received</h3>
                <p className="text-muted leading-relaxed">
                  Thank you for reaching out. I will get back to you within 24 hours to discuss your project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8 bg-background p-8 md:p-12 rounded-sm border border-muted/20">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-muted">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-transparent border-b border-muted/30 pb-3 text-primary focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent rounded-xs transition-colors duration-300 placeholder:text-muted/30"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-muted">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    className="w-full bg-transparent border-b border-muted/30 pb-3 text-primary focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent rounded-xs transition-colors duration-300 placeholder:text-muted/30"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest text-muted">Message</label>
                  <textarea 
                    id="message" 
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-muted/30 pb-3 text-primary focus:outline-none focus:border-accent focus-visible:ring-2 focus-visible:ring-accent rounded-xs transition-colors duration-300 resize-none placeholder:text-muted/30"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="group self-start mt-4 inline-flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-primary transition-colors duration-300 hover:text-accent border border-muted/30 px-8 py-4 rounded-sm hover:border-accent bg-surface/50 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  Send Inquiry 
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
