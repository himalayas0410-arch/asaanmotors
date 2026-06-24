import { motion } from 'motion/react';
import { MonitorPlay, Settings2, Car, Trophy } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <MonitorPlay size={32} />,
      title: "Simulator Training",
      desc: "Get comfortable with basic controls in a safe, virtual environment without any stress."
    },
    {
      num: "02",
      icon: <Settings2 size={32} />,
      title: "Learn Vehicle Controls",
      desc: "Understand gear shifting, clutch control, and steering techniques thoroughly."
    },
    {
      num: "03",
      icon: <Car size={32} />,
      title: "Daily 10 km Road Practice",
      desc: "Hit the actual roads with our dual-control cars under expert supervision."
    },
    {
      num: "04",
      icon: <Trophy size={32} />,
      title: "Become a Confident Driver",
      desc: "Graduate with the skills and confidence to drive safely anywhere."
    }
  ];

  return (
    <section className="py-20 bg-brand-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Learning Process</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Hidden on mobile) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-brand-secondary/30 z-0"></div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-blue-900 border-4 border-brand-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-brand-secondary group-hover:text-brand-primary transition-all duration-300 shadow-xl relative">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-secondary text-brand-primary font-bold flex items-center justify-center text-sm shadow-md">
                  {step.num}
                </div>
              </div>
              <h3 className="text-xl font-bold font-heading mb-3">{step.title}</h3>
              <p className="text-blue-100/80 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
