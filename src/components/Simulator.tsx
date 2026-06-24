import { motion } from 'motion/react';
import { Gamepad2, Navigation, Settings2, TrafficCone } from 'lucide-react';

export default function Simulator() {
  const benefits = [
    { icon: <Settings2 size={24} />, text: "Steering control & Gear shifting" },
    { icon: <Gamepad2 size={24} />, text: "Clutch, brake & accelerator coordination" },
    { icon: <Navigation size={24} />, text: "Lane discipline & Parking practice" },
    { icon: <TrafficCone size={24} />, text: "Traffic scenarios & Building confidence" },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/driving_simulator.png" 
                alt="Professional driving simulator training setup" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-brand-accent rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-block bg-brand-primary/10 text-brand-primary font-semibold px-4 py-1.5 rounded-full mb-6">
              Advanced Technology
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-6">
              Train Safely Before You Hit The Road
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Students will first practice on a driving simulator to build confidence before real-world driving. Experience different terrains and traffic conditions in a 100% safe environment.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50 hover:border-brand-secondary/50 transition-colors">
                  <div className="bg-brand-accent p-3 rounded-lg text-brand-primary">
                    {benefit.icon}
                  </div>
                  <span className="font-medium text-gray-800">{benefit.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
