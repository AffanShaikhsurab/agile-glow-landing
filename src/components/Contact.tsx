
import React, { useState } from "react";
import AnimatedContent from "./AnimatedContent";
import { Mail, Phone, MapPin, Check } from "lucide-react";

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus("idle");
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-[#0F0F15]">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-needfit-pink/10 text-needfit-pink text-sm font-medium mb-4">
            Get in Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to start your project?
          </h2>
          <p className="text-white/70 text-lg">
            Contact us today to discuss how we can help bring your vision to life.
          </p>
        </AnimatedContent>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <AnimatedContent 
            direction="horizontal" 
            distance={40} 
            reverse={true}
          >
            <div className="bg-gradient-primary rounded-2xl p-8 md:p-10 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="text-white/80 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <a href="mailto:hello@needfit.com" className="text-white hover:text-white/80 transition-colors">
                      hello@needfit.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-white hover:text-white/80 transition-colors">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Office</p>
                    <p className="text-white">
                      123 Innovation Drive<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="font-medium mb-4">Connect with us</p>
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
            </div>
          </AnimatedContent>
          
          <AnimatedContent 
            direction="horizontal" 
            distance={40}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-black/20 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-needfit-purple focus:ring-2 focus:ring-needfit-purple/20 outline-none transition-all"
                  placeholder="John Doe"
                  required
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-needfit-purple focus:ring-2 focus:ring-needfit-purple/20 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:border-needfit-purple focus:ring-2 focus:ring-needfit-purple/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                  disabled={formStatus === "submitting" || formStatus === "success"}
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus === "submitting" || formStatus === "success"}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium transition-all ${
                  formStatus === "success"
                    ? "bg-green-500"
                    : "bg-gradient-primary hover:shadow-lg"
                }`}
              >
                {formStatus === "submitting" ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : formStatus === "success" ? (
                  <span className="flex items-center justify-center">
                    <Check className="mr-2 h-4 w-4" />
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
};

export default Contact;
