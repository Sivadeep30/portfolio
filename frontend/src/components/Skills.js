import React from 'react';
import { motion } from 'framer-motion';

// Individual Skill Component with Images
const Skill = ({ skill, iconPath }) => {
  return (
    <motion.div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '100px',
        padding: '12px',
        border: '2px solid #9333ea',
        borderRadius: '10px',
        backgroundColor: '#1e1e1e',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <div style={{ width: '50px', height: '50px', marginBottom: '8px' }}>
        <img
          src={iconPath}
          alt={skill}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
          onError={(e) => {
            e.currentTarget.src = `https://via.placeholder.com/50x50.png?text=${skill[0]}`;
          }}
        />
      </div>
      <p style={{ fontSize: '12px', fontWeight: '600', color: '#fff', textAlign: 'center' }}>
        {skill}
      </p>
    </motion.div>
  );
};

// Skill categories with direct icon paths
const skillCategories = {
  Languages: [
    { name: 'C', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Java', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },

  ],
  Frontend: [
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'Bootstrap', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
    { name: 'Express', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' },
    { name: 'Flask', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg' },
  ],
  Database: [
    { name: 'MongoDB', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' },
  ],
  Tools: [
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'GitHub', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    { name: 'Vercel', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vercel/vercel-original.svg' },
  ],
};

// Parent Component - Displays categorized skills
const Skills = () => {
  return (
    <div style={{ padding: '50px 20px', textAlign: 'center', backgroundColor: 'black' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#9333ea', marginBottom: '30px' }}>
        Professional Skillset
      </h1>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {Object.entries(skillCategories).map(([category, skills]) => (
          <div key={category} style={{ marginBottom: '40px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#d946ef', marginBottom: '20px' }}>
              {category}
            </h2>
            <motion.div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '15px',
                flexWrap: 'wrap',
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              {skills.map((skill, index) => (
                <Skill key={index} skill={skill.name} iconPath={skill.icon} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
