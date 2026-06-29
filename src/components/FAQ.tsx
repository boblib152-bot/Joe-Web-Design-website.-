import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How much of my time will this project take?",
    answer: "Very little. Once we discuss your goals and you share your basic info, I handle all the design and setup. You can focus on your clients while I take care of building the website."
  },
  {
    question: "What features can you build into my website?",
    answer: "I set up everything your business needs to succeed online—including appointment booking calendars, client inquiry forms, map locations, and contact pages so client inquiries reach you instantly."
  },
  {
    question: "What happens after the website is live?",
    answer: "I keep your website running smoothly and securely in the background. A simple monthly fee covers hosting, system updates, and support whenever you need to change text or images."
  },
  {
    question: "Do I fully own the website once it is complete?",
    answer: "Yes, the website is 100% yours. While I manage the hosting and updates for you, you own the domain and all the website content, with complete freedom to move it whenever you wish."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="bg-background py-32 px-6 md:px-12 relative z-10">
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
            const answerId = `faq-answer-${index}`;
            
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
                  className="flex w-full items-center justify-between py-8 text-left transition-colors duration-300 hover:text-accent cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm px-1"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                >
                  <span className="font-serif text-xl md:text-2xl">{faq.question}</span>
                  <span className="ml-6 flex-shrink-0 text-muted">
                    {isOpen ? <Minus className="h-6 w-6" /> : <Plus className="h-6 w-6" />}
                  </span>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-muted leading-relaxed max-w-2xl text-sm md:text-base">
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
