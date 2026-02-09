import { useRef, useEffect, useState, useContext } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import HeaderAnimation from "../components/HeaderAnimation";
import { AppContext } from "../App";

const Projects = (props) => {
  const { slide } = useContext(AppContext);
  const heading = "My Projects";

  // Image function to handle local images
  const imageFunc = (string) => {
    const image = require(`../assts/${string}`);
    return image;
  };

  const ProjectItem = ({ myProject }) => {
    const targetRef = useRef();
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsVisible(entry.isIntersecting);
        },
        {
          threshold: 0.3,
        }
      );
      
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }

      return () => {
        observer.disconnect();
      };
    }, []);

    const stackArray = myProject.stack ? myProject.stack.split(', ') : myProject.languagesArray || [];

    return (
      <div 
        key={myProject.id} 
        ref={targetRef} 
        className={`group transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
      >
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200">
          {/* Project Image */}
          <div 
            className="relative h-64 md:h-72 overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
              src={imageFunc(myProject.img)}
              alt={myProject.name}
            />
            
            {/* Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-0'}`}>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  <a 
                    href={myProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span className="font-medium">Live Demo</span>
                  </a>
                  <a 
                    href={myProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <FaGithub size={16} />
                    <span className="font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Project Content */}
          <div className="p-6">
            {/* Project Title */}
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-2xl font-bold text-gray-800 group-hover:text-gray-600 transition-colors duration-300">
                {myProject.name}
              </h2>
              <FaCode className="text-gray-400 group-hover:text-gray-600 transition-colors duration-300" size={20} />
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {stackArray.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-300 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-6">
              {myProject.description}
            </p>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <a 
                href={myProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-gray-800 text-white text-center py-3 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-[1.02] font-medium"
              >
                View Project
              </a>
              <a 
                href={myProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-all duration-300 transform hover:scale-[1.02] font-medium"
              >
                <FaGithub size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="project" className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 py-8 md:py-16">
      {/* Header Section */}
      <div className={`sticky top-8 md:top-12 z-10 bg-gray-100/80 backdrop-blur-md border-b border-gray-200 transition-all duration-500 ${slide ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <HeaderAnimation heading={heading} />
          <p className="text-gray-600 mt-2 md:mt-4 text-sm md:text-lg max-w-2xl">
            A collection of projects showcasing my expertise in modern web development,
            from AI-powered applications to dynamic user interfaces.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 md:px-6 mt-8 md:mt-12 pb-8 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-7xl mx-auto">
          {props.myProjects.map((project) => (
            <ProjectItem key={project.id} myProject={project} />
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-6 mt-12 md:mt-16 text-center pb-8 md:pb-16">
        <div className="bg-gradient-to-r from-gray-800 to-gray-600 text-white rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Interested in collaborating?</h3>
          <p className="text-gray-200 mb-4 md:mb-6 text-sm md:text-base">
            I'm always open to discussing new opportunities and innovative projects.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-gray-800 px-6 md:px-8 py-2 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};


export default Projects;
