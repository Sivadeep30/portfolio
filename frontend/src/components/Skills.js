import React from "react";
import { motion } from "framer-motion";
import { CgCPlusPlus } from "react-icons/cg";
import { FaReact, FaHtml5, FaCss3Alt, FaJava, FaGitAlt, FaGithub, FaFigma, FaBootstrap } from "react-icons/fa";
import { DiNodejs, DiPython, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel, SiMysql } from "react-icons/si";

// Individual Skill Component
const Skill = ({ skill }) => {
  const icons = {
    'C': <CgCPlusPlus />, // C Icon not available, using C++ icon
    'C++': <CgCPlusPlus />,
    'Java': <FaJava />,
    'React': <FaReact />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'Javascript': <DiJavascript1 />,
    'Python': <DiPython />,
    'Node': <DiNodejs />,
    'Express': <SiExpress />,
    'MongoDB': <SiMongodb />,
    'Git': <FaGitAlt />,
    'Github': <FaGithub />,
    'Figma': <FaFigma />,
    'Bootstrap': <FaBootstrap />,
    'MySQL': <SiMysql />,
    'Vercel': <SiVercel />
  };

  return (
    <motion.div
      className="SkillBox"
      title={skill}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.2, rotate: 5 }}
    >
      {icons[skill]}
      <p className="SkillName">{skill}</p>
    </motion.div>
  );
};

// Skill categories
const skillCategories = {
  Languages: ['C', 'C++', 'Java'],
  Frontend: ['React', 'HTML', 'CSS', 'Javascript', 'Bootstrap'],
  Backend: ['Node', 'Express', 'Python'],
  Database: ['MongoDB', 'MySQL'],
  Tools: ['Git', 'Github', 'Figma', 'Vercel'],
};

// Parent Component - Displays categorized skills
const Skills = () => {
  return (
    <div id="skills">
      <h1 className="SkillsHeading">Professional Skillset</h1>
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="SkillCategory">
          <h2 className="CategoryHeading">{category}</h2>
          <motion.div 
            className="skills"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {skills.map((skill, index) => (
              <Skill key={index} skill={skill} />
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
