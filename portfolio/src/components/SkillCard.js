import React from 'react';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="skill-card">
      <h3>{category}</h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-logo">
              {skill.logo}
            </div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;