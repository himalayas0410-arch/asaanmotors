import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "How long is the course?", a: "The driving training course is designed to be completed in 10 days." },
    { q: "How much practical driving will I receive?", a: "You will receive 10 km of practical road driving every day, totaling 100 km by the end of the course." },
    { q: "Is simulator training included?", a: "Yes, simulator training is included to help you build confidence and understand vehicle controls before hitting the road." },
    { q: "Is this suitable for beginners?", a: "Absolutely! Our course is perfectly tailored for absolute beginners with step-by-step guidance." },
    { q: "Are flexible timings available?", a: "Yes, we offer flexible timings subject to availability to fit your busy schedule." },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 bg-brand-accent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Frequently Asked Questions</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
              >
                <span className="font-semibold text-brand-primary pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`text-brand-secondary transition-transform duration-300 shrink-0 ${openIdx === idx ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-600">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
