
import React, { useEffect, useRef } from "react";
import TypewriterText from "./TypewriterText";
import { ArrowRight } from "lucide-react";
import Ribbons from "./Ribbons";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#080810]">
      {/* Ribbon effect */}
      <div className="absolute inset-0 z-0">
        <Ribbons
          baseThickness={30}
          colors={['#6C0FB2', '#3D7AED', '#E75A82']}
          speedMultiplier={0.5}
          maxAge={500}
          enableFade={false}
          enableShaderEffect={true}
        />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/5 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-needfit-pink/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-needfit-blue/10 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="container mx-auto px-4 md:px-6 py-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center text-white space-y-8">
          <div className="inline-block py-2 px-4 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 text-sm font-medium mb-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Software Development Agency
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight md:leading-tight">
            <TypewriterText 
              text="Turning ideas into digital" 
              delay={500}
              className="block"
            />
            <span className="text-gradient-primary">products</span> at the
            <span className="text-gradient-secondary"> speed of thought</span>
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl text-white/80 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            We specialize in rapid iteration and MVP development, helping startups and enterprises bring their vision to life in record time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mt-4 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <a 
              href="#contact" 
              className="relative group bg-black/30 backdrop-blur-md border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-full font-medium transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
            >
              Start Your Project 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#portfolio" 
              className="px-8 py-4 rounded-full font-medium text-white border border-white/10 hover:bg-white/5 transition-all"
            >
              View Our Work
            </a>
          </div>
        </div>
        
        <div className="mt-20 md:mt-32 flex flex-col items-center animate-fade-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-white/50 text-sm uppercase tracking-widest mb-6">Trusted by innovative companies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {["Company 1", "Company 2", "Company 3", "Company 4"].map((company, index) => (
              <div 
                key={index} 
                className="h-8 flex items-center justify-center mix-blend-lighten opacity-70 hover:opacity-100 transition-opacity"
              >
                <div className="w-32 h-8 bg-black/30 backdrop-blur-sm rounded-md flex items-center justify-center font-semibold text-white">
                  {company}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Curved divider */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-[#0A0A12]">
        <svg 
          className="absolute -top-20 left-0 w-full fill-[#0A0A12]" 
          viewBox="0 0 1440 96" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96L60 85.3C120 74.7 240 53.3 360 42.7C480 32 600 32 720 48C840 64 960 96 1080 96C1200 96 1320 64 1380 48L1440 32V96H0Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
