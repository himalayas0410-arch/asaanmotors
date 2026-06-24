import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
        href="tel:+919837040974"
        className="w-14 h-14 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={24} />
      </motion.a>
      
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        href="https://wa.me/919837040974"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={28} />
        {/* Ping animation for WhatsApp */}
        <span className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75"></span>
      </motion.a>
    </div>
  );
}
