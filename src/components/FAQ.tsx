import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What does 'hands-off' actually mean for me?",
    answer: "It means you provide the initial brief and assets, and I handle the rest. From art direction and wireframing to full development and deployment, you won't need to micromanage or write a single line of code. You review milestones, I handle the execution."
  },
  {
    question: "How long does a typical project take?",
    answer: "Most bespoke websites take between 4 to 8 weeks, depending on the complexity and scope. Because my process is streamlined, we avoid the typical agency bottlenecks and endless revision cycles."
  },
  {
    question: "Do you handle hosting and domain setup?",
    answer: "Yes. Every project includes complete technical setup. I configure your domain, optimize your hosting for speed and security, and ensure everything is running flawlessly before we hand over the keys."
  },
  {
    question: "What if I need updates after launch?",
    answer: "I offer ongoing maintenance retainers for clients who want to remain completely hands-off post-launch. Alternatively, I build the site on an intuitive CMS so you or your team can make simple updates if you prefer."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-background py-32 px-6 md:px-12 relative z-10">
      <div className="mx-auto max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-24 sticky top-0 z-30 bg-background md:bg-transparent md:static pt-6 -mt-6 pr-12 md:pr-0 md:pt-0 md:-mt-0 pb-4 md:pb-0"
        >
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl">Client <span className="italic text-accent">Questions</span></h2>
        </motion.div>

        <div className="flex flex-col border-t border-surface">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-surface"
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between py-8 text-left transition-colors hover:text-accent"
                >
                  <span className="font-serif text-xl md:text-2xl">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0 text-muted">
                    {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-muted leading-relaxed max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
