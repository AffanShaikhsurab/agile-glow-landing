
import React from "react";
import AnimatedContent from "./AnimatedContent";
import { Code, Rocket, Lightbulb, BarChart, ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <AnimatedContent 
      direction="vertical" 
      distance={40} 
      delay={delay} 
      className="glass-card rounded-xl p-6 flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-6 shadow-lg">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a 
        href="#contact" 
        className="mt-6 text-needfit-purple font-medium flex items-center group"
      >
        Learn more 
        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </AnimatedContent>
  );
};

const services = [
  {
    icon: <Lightbulb className="text-white" size={24} />,
    title: "Product Strategy",
    description: "We help define your product vision and create a roadmap that aligns with your business goals and user needs.",
  },
  {
    icon: <Code className="text-white" size={24} />,
    title: "MVP Development",
    description: "Rapidly build and launch minimum viable products that validate your ideas with real users.",
  },
  {
    icon: <Rocket className="text-white" size={24} />,
    title: "Rapid Prototyping",
    description: "Transform concepts into interactive prototypes to test and refine before full development.",
  },
  {
    icon: <BarChart className="text-white" size={24} />,
    title: "Iterative Enhancement",
    description: "Continuously improve your product based on user feedback and performance analytics.",
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-needfit-purple/10 text-needfit-purple text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Accelerate your digital transformation
          </h2>
          <p className="text-gray-600 text-lg">
            We combine strategic thinking with technical expertise to deliver exceptional digital products in record time.
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index} 
              icon={service.icon} 
              title={service.title} 
              description={service.description} 
              delay={index * 0.1}
            />
          ))}
        </div>

        <AnimatedContent 
          className="mt-20 p-8 rounded-2xl bg-gradient-primary text-white flex flex-col md:flex-row items-center justify-between"
          distance={30}
        >
          <div className="mb-6 md:mb-0 md:mr-8">
            <h3 className="text-2xl font-bold mb-2">Ready to accelerate your project?</h3>
            <p className="text-white/80">Let's discuss how our services can help you achieve your goals.</p>
          </div>
          <a 
            href="#contact" 
            className="whitespace-nowrap px-8 py-3 bg-white text-needfit-purple rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
          >
            Get in Touch
          </a>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default Services;
