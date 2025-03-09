
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import { ArrowUp } from "lucide-react";
import { setupScrollAnimations } from "../utils/animation";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  useEffect(() => {
    // Initialize scroll animations
    setupScrollAnimations('.section-animate');

    // Setup scroll-to-top button visibility
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      
      <footer className="bg-needfit-dark-blue text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a href="#" className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg mr-2">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <span className="font-bold text-2xl">NeedFit</span>
              </a>
              <p className="text-white/70 mb-6">
                Turning ideas into digital products at the speed of thought.
              </p>
              <div className="flex space-x-4">
                {["Twitter", "LinkedIn", "Instagram"].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <span className="text-sm">{social.charAt(0)}</span>
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {["Services", "Portfolio", "Testimonials", "Contact"].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <address className="not-italic text-white/70 space-y-3">
                <p>123 Innovation Drive</p>
                <p>San Francisco, CA 94103</p>
                <p>
                  <a href="mailto:hello@needfit.com" className="hover:text-white transition-colors">
                    hello@needfit.com
                  </a>
                </p>
                <p>
                  <a href="tel:+1234567890" className="hover:text-white transition-colors">
                    +1 (234) 567-890
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} NeedFit. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 p-3 rounded-full bg-needfit-purple text-white shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Index;
