import React, { useState } from "react";
import AnimatedContent from "./AnimatedContent";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import ShinyText from "./ShinyText";

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "HealthTech Solutions",
    quote: "NeedFit transformed our vision into a working MVP in just 6 weeks. Their agile approach and attention to detail exceeded our expectations at every turn.",
    image: "https://via.placeholder.com/100x100/6C0FB2/FFFFFF?text=SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Product Director",
    company: "EcoTrack",
    quote: "Working with NeedFit was a game-changer for our product development. They not only delivered on time but brought innovative solutions to challenges we hadn't even considered.",
    image: "https://via.placeholder.com/100x100/3D7AED/FFFFFF?text=MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Founder",
    company: "FinNext",
    quote: "The team at NeedFit truly understands the startup journey. They were partners in our success, helping us iterate quickly and establish product-market fit.",
    image: "https://via.placeholder.com/100x100/E75A82/FFFFFF?text=ER",
  },
];

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-sm font-medium mb-4">
            <ShinyText text="Client Testimonials" speed={3} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What our clients say about us
          </h2>
          <p className="text-white/80 text-lg">
            We take pride in delivering exceptional results that exceed our clients' expectations.
          </p>
        </AnimatedContent>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative overflow-hidden pt-8">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="min-w-full px-4"
                >
                  <div className="glass rounded-2xl p-8 md:p-10 text-center relative">
                    <Quote className="mx-auto text-white/20 w-16 h-16 mb-6" />
                    
                    <p className="text-lg md:text-xl mb-8 text-white/90">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-white/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-lg font-bold">
                        <ShinyText text={testimonial.name} speed={3} />
                      </h4>
                      <p className="text-white/70">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index ? "bg-white scale-125" : "bg-white/30"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-black/50 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform hidden md:block"
            onClick={handlePrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-black/50 text-white p-2 rounded-full shadow-lg hover:scale-110 transition-transform hidden md:block"
            onClick={handleNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
