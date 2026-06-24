import { motion } from 'motion/react';
import { ShieldCheck, Car, Monitor, Clock, IndianRupee, Users, TrafficCone, Star } from 'lucide-react';

export default function Features() {
  const features = [
    { icon: <ShieldCheck size={28} />, title: "Experienced Instructors", desc: "Patient, certified professionals" },
    { icon: <Car size={28} />, title: "Practical Road Training", desc: "Real-world driving experience" },
    { icon: <Monitor size={28} />, title: "Driving Simulator Training", desc: "Practice safely before road" },
    { icon: <Clock size={28} />, title: "Flexible Timings", desc: "Classes that fit your schedule" },
    { icon: <IndianRupee size={28} />, title: "Affordable Fees", desc: "Value for money packages" },
    { icon: <Users size={28} />, title: "Personalized Attention", desc: "One-on-one training focus" },
    { icon: <TrafficCone size={28} />, title: "Road Safety Education", desc: "Learn essential traffic rules" },
    { icon: <Star size={28} />, title: "Beginner Friendly", desc: "Step-by-step guidance" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Why Choose Us</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-brand-accent rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-primary mb-5 group-hover:bg-brand-secondary transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-brand-primary mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
