import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function Pricing() {
  const inclusions = [
    "10 days of training",
    "10 km practical driving every day",
    "Total 100 km road driving",
    "Driving simulator practice",
    "Vehicle control training",
    "Steering techniques",
    "Parking practice",
    "Reverse driving",
    "Traffic rules and safety",
    "Instructor guidance throughout the course"
  ];

  return (
    <section id="courses" className="py-20 bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Training Program</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">Get everything you need to become a confident driver with our comprehensive package.</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-5 h-full">
              <div className="md:col-span-2 bg-brand-primary text-white p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-brand-secondary/20 blur-2xl"></div>
                <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 rounded-full bg-blue-400/20 blur-2xl"></div>
                
                <h3 className="text-2xl font-bold font-heading mb-2 relative z-10">10-Day Driving Training Plan</h3>
                <div className="my-6 relative z-10">
                  <span className="text-5xl font-black">₹3,000</span>
                </div>
                <p className="text-blue-100 mb-8 relative z-10">Complete beginner to confident driver package.</p>
                <a 
                  href="#book" 
                  className="w-full bg-brand-secondary text-brand-primary font-bold py-4 rounded-full hover:bg-yellow-400 transition-colors shadow-lg relative z-10"
                >
                  Book Now
                </a>
              </div>
              
              <div className="md:col-span-3 p-8 md:p-10">
                <h4 className="font-bold text-xl mb-6 text-brand-primary">Course Includes:</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {inclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full text-green-600 shrink-0 mt-0.5">
                        <Check size={16} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
