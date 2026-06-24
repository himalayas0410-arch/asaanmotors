import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-brand-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-6">
              About Asaan Motors
            </h2>
            <div className="w-20 h-1 bg-brand-secondary mb-8 rounded-full"></div>
            
            <div className="space-y-6 text-gray-200 text-lg">
              <p>
                At Asaan Motors Driving Training School, we are committed to helping learners become safe, skilled, and confident drivers.
              </p>
              <p>
                Our training combines simulator-based learning with practical road experience, allowing students to build confidence before driving independently.
              </p>
              <p>
                Our instructors provide patient, step-by-step guidance in a comfortable and supportive environment.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['Certified Trainers', 'Dual Control Cars', 'Modern Simulators', 'High Success Rate'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-secondary" size={24} />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-brand-secondary/20">
              <img 
                src="/about_happy_driver.png" 
                alt="Happy driver with key and license" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-4 left-4 md:-bottom-6 md:-left-6 bg-brand-secondary text-brand-primary p-6 rounded-2xl shadow-xl max-w-[200px]">
              <p className="text-4xl font-black mb-1">500+</p>
              <p className="font-medium leading-tight">Confident drivers trained</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
