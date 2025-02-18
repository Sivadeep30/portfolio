import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const projects = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "fullstack",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      "https://images.unsplash.com/photo-1557821556-73f11ba37e1e?w=800&q=80"
    ],
    github: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    name: "AI Image Recognition",
    category: "aiml",
    description: "An AI-powered image recognition system using deep learning models.",
    techStack: ["Python", "TensorFlow", "OpenCV", "Flask"],
    images: [
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80",
      "https://images.unsplash.com/photo-1555949968-bbe06ac22e19?w=800&q=80"
    ],
    github: "https://github.com/yourusername/ai-image-recognition"
  },
  {
    id: 3,
    name: "Smart Home System",
    category: "iot",
    description: "IoT-based smart home automation system with sensor integration and mobile control.",
    techStack: ["Arduino", "Raspberry Pi", "MQTT", "React Native"],
    images: [
      "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&q=80",
      "https://images.unsplash.com/photo-1558002038-1055907df828?w=800&q=80"
    ],
    github: "https://github.com/yourusername/smart-home"
  }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('fullstack');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      
      <div className="category-tabs">
        {['fullstack', 'aiml', 'iot'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <img
              src={project.images[0]}
              alt={project.name}
              className="project-image"
            />
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <button
                onClick={() => setSelectedProject(project)}
                className="view-details-btn"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{selectedProject.name}</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="close-btn"
              >
                <X size={24} />
              </button>
            </div>

            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="project-swiper"
            >
              {selectedProject.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${selectedProject.name} screenshot ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="modal-details">
              <p>{selectedProject.description}</p>
              
              <div className="tech-stack">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {selectedProject.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  <Github size={20} />
                  GitHub
                </a>
                {selectedProject.liveDemo && (
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="demo-btn"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;