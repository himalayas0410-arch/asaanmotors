/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing';
import Simulator from './components/Simulator';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingActionButtons from './components/FloatingActionButtons';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden font-sans selection:bg-brand-secondary selection:text-brand-primary">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Pricing />
      <Simulator />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingActionButtons />
    </div>
  );
}

