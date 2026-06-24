import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-brand-primary mb-4">Contact Us</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary mb-4 shadow-sm">
                  <MapPin size={24} />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">Our Location</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Shop no. C2/12/5, Vikas Market,<br />
                  Near Sultanganj Crossing, Kamla Nagar, Agra
                </p>
              </div>
              
              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary mb-4 shadow-sm">
                  <Phone size={24} />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">Call & WhatsApp</h4>
                <div className="text-gray-600 text-sm space-y-1">
                  <p>+91 98370 40974</p>
                  <p>+91 99270 01930</p>
                  <p>+91 89790 88051</p>
                  <p>+91 99279 85828</p>
                </div>
              </div>

              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary mb-4 shadow-sm">
                  <Mail size={24} />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">Email Address</h4>
                <p className="text-gray-600 text-sm">hello@asaanmotors.com</p>
              </div>

              <div className="bg-brand-accent p-6 rounded-2xl">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-secondary mb-4 shadow-sm">
                  <Clock size={24} />
                </div>
                <h4 className="font-bold text-brand-primary mb-2">Working Hours</h4>
                <p className="text-gray-600 text-sm">Mon-Sun: 6:00 AM - 8:00 PM</p>
              </div>
            </div>

            <div className="w-full h-64 bg-gray-200 rounded-2xl overflow-hidden relative">
              <iframe 
                src="https://maps.google.com/maps?q=27.2101385,78.0194044+(Asaan+Motor+Driving+Training+School)&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary p-8 md:p-10 rounded-3xl shadow-xl"
            id="book"
          >
            <h3 className="text-2xl font-bold font-heading text-white mb-6">Book Your Training</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-blue-100 text-sm font-medium mb-1">Full Name</label>
                <input type="text" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-brand-secondary transition-colors" placeholder="John Doe" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-1">Mobile Number</label>
                  <input type="tel" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-brand-secondary transition-colors" placeholder="+91 XXXXX XXXXX" />
                </div>
                <div>
                  <label className="block text-blue-100 text-sm font-medium mb-1">Email Address</label>
                  <input type="email" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-brand-secondary transition-colors" placeholder="john@example.com" />
                </div>
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-1">Preferred Timing</label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-brand-secondary transition-colors appearance-none">
                  <option value="" className="text-gray-800">Select Timing</option>
                  <option value="morning" className="text-gray-800">Morning (6 AM - 11 AM)</option>
                  <option value="afternoon" className="text-gray-800">Afternoon (12 PM - 4 PM)</option>
                  <option value="evening" className="text-gray-800">Evening (5 PM - 8 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-blue-100 text-sm font-medium mb-1">Message (Optional)</label>
                <textarea rows={3} className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:border-brand-secondary transition-colors resize-none" placeholder="Any specific requirements?"></textarea>
              </div>

              <button type="submit" className="w-full bg-brand-secondary text-brand-primary font-bold py-4 rounded-xl hover:bg-yellow-400 transition-colors shadow-lg flex items-center justify-center gap-2 mt-4">
                Submit Request
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
