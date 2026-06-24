import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      text: "The simulator training helped me gain confidence before driving on the road. Highly recommended!",
      name: "Rahul Sharma",
      role: "Student"
    },
    {
      text: "Professional instructors and excellent teaching methods. I learned to drive in just 10 days.",
      name: "Priya Patel",
      role: "Working Professional"
    },
    {
      text: "Affordable and beginner-friendly experience. The instructors are very patient.",
      name: "Amit Kumar",
      role: "Student"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">What Our Students Say</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-accent p-8 rounded-3xl relative border border-gray-100 shadow-sm"
            >
              <div className="absolute top-8 right-8 text-brand-primary/10">
                <Quote size={60} />
              </div>
              
              <div className="flex gap-1 mb-6 text-brand-secondary">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 italic mb-8 relative z-10 leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
