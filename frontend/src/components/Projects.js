import React, { useState } from 'react';
import { Github, ExternalLink, X, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import a from '../assests/img/auto.png';
import aa from '../assests/img/auto1.png';
import ab from '../assests/img/auto3.png';
import abc from '../assests/img/auto4.png';
import abcd from '../assests/img/auto5.png';
import abcde from '../assests/img/auto6.png';
import abcdef from '../assests/img/auto7.png';
import abcdeff from '../assests/img/auto8.png';
import abcdefff from '../assests/img/auto9.png';
import b from '../assests/img/cricket.png';
import bb from '../assests/img/cricket1.png';
import bc from '../assests/img/cricket2.png';
import bcd from '../assests/img/cricket3.png';
import bcde from '../assests/img/cricket4.png';
import i1 from '../assests/img/imgg.png';
import i2 from '../assests/img/im.png';
import i3 from '../assests/img/imgg3.png';
import i4 from '../assests/img/imgg4.png';
import i5 from '../assests/img/imgg5.png';
import i6 from '../assests/img/imgg6.png';
import i7 from '../assests/img/imgg7.png';
import iot from '../assests/img/iot1.jpeg';
import iott from '../assests/img/iot11.jpeg';
import iottt from '../assests/img/iot2.jpeg';
import iotttt from '../assests/img/iot22.jpeg';
import cropp from '../assests/img/crop.jpg';
import grrot from '../assests/img/groot.jpg';
import i8 from '../assests/img/iott1.jpg';

const projects = [
  {
    id: 1,
    name: "Online Automobile Store",
    category: "fullstack",
    description: "An Online Automobile Store in which the users can view and book orders to buy a car. Features include real-time inventory updates, users selling their own cars, and a responsive admin dashboard.",
    longDescription: "This full-stack e-commerce platform revolutionizes the car buying experience. Built with a modern tech stack, it offers seamless integration between the frontend and backend systems. Key features include real-time inventory management, users selling their own cars, and a comprehensive admin dashboard for inventory and order management.",
    techStack: ["HTML","CSS","JavaScript","React", "Python", "MySQL"],
    cardImage: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    images: [
              a,aa,ab,abc,abcd,abcde,abcdef,abcdeff,abcdefff
    ],
    github: "https://github.com/Sivadeep30/Auto-store",
    features: [
      "Real-time inventory tracking",
      "Users Selling their own cars",
      "Admin dashboard",
      "Order management",
      "User authentication"
    ]
  },
  {
    id: 2,
    name: "Cricket App",
    category: "fullstack",
    
      "description": "A Cricket Stats App that allows users to browse Indian cricket players, view their profiles, and check their match statistics in various formats.",
      "longDescription": "This full-stack cricket statistics platform provides users with real-time player stats, including Test, ODI, T20, and IPL records. Built using a modern tech stack, it offers an interactive UI for seamless navigation, along with detailed player profiles and performance insights.",
      "techStack": ["React", "Node.js", "Express", "MongoDB", "Cricket API"],
      "cardImage": "https://images.augustman.com/wp-content/uploads/sites/4/2023/04/20180002/untitled-design-2023-04-16t071319-214.jpeg?tr=w-1920",
      "images": [
          b,bb,bc,bcd,bcde
      ],
      "github": "https://github.com/Sivadeep30/cricket",
      "features": [
          "Live Cricket Scores",
          "Display player profiles with images",
          "Show detailed batting and bowling stats",
          "Live updates on match performances",
          "Search and filter players by format (Test, ODI, T20, IPL)"
      ]
  
  
  },
  {
    id: 3,
    name: "GROOT-AI Driven Plant Disease Prediction",
    category: "aiml",
    description: "For Predicting the Diseases of crops and giving Solution via AI ChatBot",
    longDescription:"A mobile and web app for predicting the diseases caused in plants.Online and Offline functionalities are available.In offline a user can identify the diseases caused by downloading the modal in the mobile itself.In online he access the feature of online chatbot in which the Queries related to the diseases can be asked in text using their own languages or voice assistant.Admin's can validate the posts and the alerts of nearby diseases can be shown to the user.By using environmental factors the upcoming diseases can be predicted.",
    techStack: ["Flutter","Python", "Llama2", "ReactJS", "MongoDB"],
    cardImage: grrot,
    images: [
      i1,i2,i3,i4,i5,i6,i7
    ],
    github: "https://github.com/sudharsanacernitro/Plant_Disease_prediction",
    features: [
      "Mobile and Web App",
      "Online and Offline",
      "Multi-Lingual Chatbot",
      "Validated Posts",
      "Alert to farmers"
    ]
  },
  {
    id: 4,
    name: "Smart Water Tax Calculation Meter",
    category: "iot",
    description: "IoT-based smart water tax calculation meter to measure the taxes.",
    longDescription: "An IOT based water tax calculation meter for the peoplw living in the apartments.They are currently paying the shared amount of the total apartment.By using this each houses in apartment can pay their tax according to the amount of water they used.",
    techStack: ["Arduino", "Water Flow Sensor", "LCD"],
    cardImage: i8,
    images: [
     iot,iott
    ],
    features: [
      "Accuarate Water Usage Measurement",
      "Pay to Usage",
      "Easy Monitoring",
      "No Excess Water Management",
      "Water Conservation"
    ]
  },
  {
    id: 5,
    name: "Environmental Data Collection for Groot",
    category: "iot",
    description: "Environmental data collection using IOT sensors for plant disease prediction.",
    longDescription: "For collecting environmenntal data using soil moisture sensor ,humidity sensor ,temperature sensor and it is used to predict the diseases that may occur due to the conditions available there.",
    techStack: ["Raspberry PI", "Arduino", "Soil Moisture Sensor,NodeMCU"],
    cardImage: cropp,
    images: [
      iottt,iotttt
    ],
    features: [
      "Environmental Data Collection",
      "Earlier Disease Prediction",
      "Easy Monitoring"
     
    ]
  }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('fullstack');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter(project => project.category === selectedCategory);

  const handleModalClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      setSelectedProject(null);
    }
  };

  return (
    <section id="projects">
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
            <div className="project-image-container">
              <img
                src={project.cardImage}
                alt={project.name}
                className="project-image"
              />
              <div className="project-overlay">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="view-details-btn"
                >
                  View Details
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-tech-preview">
                {project.techStack.slice(0, 3).map((tech, index) => (
                  <span key={index} className="tech-tag-preview">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="tech-tag-preview">+{project.techStack.length - 3}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleModalClick}>
          <div className="modal-content">
            <button
              onClick={() => setSelectedProject(null)}
              className="close-btn"
            >
              <X size={24} />
            </button>

            <div className="modal-grid" style={{display:"flex",flexDirection:"column", gap:"2rem"}}>
              <div className="modal-gallery" style={{width:"100%"}}>
                <Swiper
                  modules={[Navigation, Pagination, EffectFade]}
                  navigation
                  pagination={{ clickable: true }}
                  effect="fade"
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
              </div>

              <div className="modal-details">
                <div className="modal-header">
                  <h3>{selectedProject.name}</h3>
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

                <div className="project-description">
                  <p>{selectedProject.longDescription}</p>
                </div>

                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="tech-stack">
                  <h4>Tech Stack</h4>
                  <div className="tech-tags">
                    {selectedProject.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </section>
  );
}

export default Projects;