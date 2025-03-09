
import React, { useState } from "react";
import AnimatedContent from "./AnimatedContent";
import { ArrowRight } from "lucide-react";
import ShinyText from "./ShinyText";
import SpotlightCard from "./SpotlightCard";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "HealthConnect App",
    category: "Mobile App",
    description: "A telehealth platform connecting patients with healthcare providers in real-time.",
    image: "https://via.placeholder.com/600x400/333333/FFFFFF?text=HealthConnect",
  },
  {
    id: 2,
    title: "EcoTrack Dashboard",
    category: "Web Application",
    description: "Sustainability tracking dashboard for enterprises to monitor and reduce their carbon footprint.",
    image: "https://via.placeholder.com/600x400/444444/FFFFFF?text=EcoTrack",
  },
  {
    id: 3,
    title: "FinNext Platform",
    category: "Fintech",
    description: "Next-generation financial management platform with AI-powered insights and recommendations.",
    image: "https://via.placeholder.com/600x400/555555/FFFFFF?text=FinNext",
  },
  {
    id: 4,
    title: "SmartRetail System",
    category: "IoT Solution",
    description: "Intelligent retail management system integrating inventory, sales, and customer insights.",
    image: "https://via.placeholder.com/600x400/666666/FFFFFF?text=SmartRetail",
  },
];

const filters = ["All", "Mobile App", "Web Application", "Fintech", "IoT Solution"];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
                  ? "bg-gray-800 text-white shadow-md"
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
                spotlightColor="rgba(128, 128, 128, 0.2)"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transition-all duration-300 ${
                    hoveredProject === project.id ? 'opacity-100' : 'opacity-90'
                  }`}>
                    <span className="text-sm text-white/80 font-medium">
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
                    <a
                      href="#"
                      className={`inline-flex items-center text-white font-medium transition-all duration-300 ${
                        hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                    >
                      View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </AnimatedContent>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center px-8 py-3 rounded-full border border-gray-800/20 text-white font-medium hover:bg-gray-800/10 transition-all"
          >
            View All Projects <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
