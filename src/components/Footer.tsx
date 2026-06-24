import { Facebook, Instagram, MessageCircle, Car } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-brand-secondary p-2 rounded-lg text-brand-primary">
                <Car size={24} />
              </div>
              <span className="font-heading font-bold text-xl">
                Asaan Motors
              </span>
            </div>
            <p className="text-blue-100 max-w-sm">
              Learn on a Simulator. Practice on the Road. Drive with Confidence.
            </p>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-secondary hover:text-brand-primary transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold font-heading text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'FAQs', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-blue-100 hover:text-brand-secondary transition-colors inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address Summary */}
          <div>
            <h4 className="font-bold font-heading text-lg mb-6">Visit Us</h4>
            <div className="text-blue-100 space-y-4">
              <p>Shop no. C2/12/5, Vikas Market,<br/>Near Sultanganj Crossing, Kamla Nagar, Agra</p>
              <div className="pt-2">
                <p>+91 98370 40974</p>
                <p>+91 99270 01930</p>
              </div>
              <p>Open Monday - Sunday<br/>6:00 AM - 8:00 PM</p>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>&copy; {currentYear} Asaan Motors Driving Training School. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
