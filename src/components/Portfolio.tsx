
import React, { useState } from "react";
import AnimatedContent from "./AnimatedContent";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import ShinyText from "./ShinyText";
import SpotlightCard from "./SpotlightCard";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  fullDescription?: string;
  technologies?: string[];
  challenges?: string[];
  solutions?: string[];
  results?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "HealthConnect App",
    category: "Mobile App",
    description: "A telehealth platform connecting patients with healthcare providers in real-time.",
    image: "https://via.placeholder.com/600x400/333333/FFFFFF?text=HealthConnect",
    fullDescription: "HealthConnect is a comprehensive telehealth solution designed to bridge the gap between patients and healthcare providers. The platform offers secure video consultations, appointment scheduling, and integrated health records management.",
    technologies: ["React Native", "Node.js", "MongoDB", "WebRTC", "AWS"],
    challenges: ["Ensuring HIPAA compliance", "Building a reliable real-time communication system", "Creating an intuitive interface for users of all ages"],
    solutions: ["Implemented end-to-end encryption", "Developed a custom WebRTC solution", "Conducted extensive user testing with diverse age groups"],
    results: ["30% increase in rural healthcare access", "4.8/5 patient satisfaction rating", "Reduced wait times by 45%"]
  },
  {
    id: 2,
    title: "EcoTrack Dashboard",
    category: "Web Application",
    description: "Sustainability tracking dashboard for enterprises to monitor and reduce their carbon footprint.",
    image: "https://via.placeholder.com/600x400/444444/FFFFFF?text=EcoTrack",
    fullDescription: "EcoTrack Dashboard is an enterprise-level solution for tracking, analyzing, and reducing carbon footprints. The platform integrates with existing systems to provide real-time data visualization and actionable insights for sustainability initiatives.",
    technologies: ["React", "D3.js", "Node.js", "PostgreSQL", "Docker"],
    challenges: ["Handling large datasets efficiently", "Creating meaningful visualizations", "Integrating with diverse enterprise systems"],
    solutions: ["Implemented data aggregation algorithms", "Designed custom visualization components", "Built flexible API integration layer"],
    results: ["Helped clients reduce emissions by 22% on average", "Streamlined ESG reporting processes", "Identified cost-saving opportunities"]
  },
  {
    id: 3,
    title: "FinNext Platform",
    category: "Fintech",
    description: "Next-generation financial management platform with AI-powered insights and recommendations.",
    image: "https://via.placeholder.com/600x400/555555/FFFFFF?text=FinNext",
    fullDescription: "FinNext is a cutting-edge financial platform leveraging AI to provide personalized insights and recommendations. The system analyzes spending patterns, investment opportunities, and market trends to help users make informed financial decisions.",
    technologies: ["Vue.js", "Python", "TensorFlow", "AWS Lambda", "PostgreSQL"],
    challenges: ["Building accurate prediction models", "Ensuring data security", "Creating an intuitive UX for complex financial data"],
    solutions: ["Developed custom ML algorithms", "Implemented bank-grade security measures", "Conducted extensive user research and testing"],
    results: ["Users reported 28% better financial decision-making", "Successfully predicted market trends with 87% accuracy", "Helped clients optimize investment portfolios"]
  },
  {
    id: 4,
    title: "SmartRetail System",
    category: "IoT Solution",
    description: "Intelligent retail management system integrating inventory, sales, and customer insights.",
    image: "https://via.placeholder.com/600x400/666666/FFFFFF?text=SmartRetail",
    fullDescription: "SmartRetail is an integrated IoT solution for modern retail environments. The system connects physical store operations with digital analytics to optimize inventory management, enhance customer experiences, and maximize sales opportunities.",
    technologies: ["React", "Node.js", "MQTT", "TensorFlow", "AWS IoT"],
    challenges: ["Integrating with various IoT devices", "Processing real-time data at scale", "Creating actionable insights from customer behavior"],
    solutions: ["Built a flexible device integration layer", "Implemented stream processing architecture", "Developed behavioral analytics algorithms"],
    results: ["15% reduction in inventory costs", "23% increase in sales through targeted promotions", "Improved customer satisfaction scores"]
  },
];

const filters = ["All", "Mobile App", "Web Application", "Fintech", "IoT Solution"];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Close modal when clicking outside of content
  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeProjectDetails();
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-black">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedContent className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-gray-800/70 text-white text-sm font-medium mb-4">
            <ShinyText text="Our Portfolio" speed={3} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Innovative solutions for modern challenges
          </h2>
          <p className="text-white/70 text-lg">
            Explore our latest projects and see how we've helped businesses transform their ideas into reality.
          </p>
        </AnimatedContent>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter, index) => (
            <button
              key={index}
              className={`px-5 py-2 rounded-full transition-all ${
                activeFilter === filter
                  ? "bg-[#0d47a1] text-white shadow-md"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedContent
              key={project.id}
              direction="vertical"
              distance={40}
              delay={index * 0.1}
            >
              <SpotlightCard 
                className="relative group h-full rounded-xl p-0 overflow-hidden"
                spotlightColor="rgba(13, 71, 161, 0.3)"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectDetails(project)}
              >
                <div className="card-content aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 flex flex-col justify-end transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-90'
                  }`}>
                    <span className="text-sm text-[#4f83cc] font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-white mt-1 mb-2">
                      <ShinyText text={project.title} speed={3} />
                    </h3>
                    <p className={`text-white/80 mb-4 transition-all duration-300 ${
                      hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                      {project.description}
                    </p>
                    <span
                      className={`inline-flex items-center text-[#4f83cc] font-medium transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-full border border-[#0d47a1]/20 text-white font-medium hover:bg-[#0d47a1]/10 transition-all"
          >
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Details Modal */}
      <div 
        className={`project-modal ${selectedProject ? 'show' : ''}`}
        onClick={handleModalClick}
      >
        {selectedProject && (
          <div className="project-modal-content">
            <button 
              className="project-modal-close"
              onClick={closeProjectDetails}
            >
              <X size={20} />
            </button>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-auto rounded-lg mb-4" 
                />
                <h3 className="text-lg font-semibold text-[#4f83cc] mb-2">Technologies</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject.technologies?.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-[#0d47a1]/20 text-white/90 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  <ShinyText text={selectedProject.title} speed={3} className="pulse" />
                </h2>
                <p className="text-[#4f83cc] font-medium mb-4">{selectedProject.category}</p>
                <p className="text-white/80 mb-6">{selectedProject.fullDescription}</p>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#4f83cc] mb-2">Challenges</h3>
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      {selectedProject.challenges?.map((challenge, index) => (
                        <li key={index}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#4f83cc] mb-2">Solutions</h3>
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      {selectedProject.solutions?.map((solution, index) => (
                        <li key={index}>{solution}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-[#4f83cc] mb-2">Results</h3>
                    <ul className="list-disc pl-5 text-white/80 space-y-1">
                      {selectedProject.results?.map((result, index) => (
                        <li key={index}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a 
                    href="#" 
                    className="inline-flex items-center gap-2 px-5 py-2 bg-[#0d47a1] text-white rounded-lg hover:bg-[#0d47a1]/80 transition-colors"
                  >
                    View Live Project <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
