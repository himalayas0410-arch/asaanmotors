import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-brand-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left z-10"
          >
            <div className="inline-block bg-brand-secondary/20 text-brand-primary font-semibold px-4 py-1.5 rounded-full mb-6">
              Learn on a Simulator. Practice on the Road.
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-brand-primary leading-tight mb-6">
              Learn Safe. <br/>
              Drive Smart. <br/>
              <span className="text-brand-secondary">Drive with Confidence.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Professional driving training with simulator practice and real road experience to help you become a safe and confident driver.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
              <a href="#courses" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-brand-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-900 transition-colors shadow-lg">
                Book Your Training
                <ArrowRight size={20} />
              </a>
              <a href="#contact" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-[#20bd5a] transition-colors shadow-lg">
                <MessageCircle size={20} />
                WhatsApp Us
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <img 
                src="/hero_driving_school.png" 
                alt="Student learning to drive" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg flex items-center gap-4">
                  <div className="bg-brand-secondary p-3 rounded-full text-brand-primary">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary">100% Safe</p>
                    <p className="text-sm text-gray-600">Dual control training cars</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-secondary/20 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
