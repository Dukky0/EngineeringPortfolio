import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", logo: "🐍" },
        { name: "Java", logo: "☕" },
        { name: "JavaScript", logo: "🟨" },
        { name: "TypeScript", logo: "🔷" },
        { name: "C++", logo: "⚡" }
      ]
    },
    {
      category: "Web Technologies",
      skills: [
        { name: "React.js", logo: "⚛️" },
        { name: "Node.js", logo: "🟢" },
        { name: "HTML5", logo: "🧡" },
        { name: "CSS3", logo: "🔵" },
        { name: "SCSS", logo: "💗" },
        { name: "Express.js", logo: "🚀" }
      ]
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git", logo: "📝" },
        { name: "Docker", logo: "🐳" },
        { name: "MongoDB", logo: "🍃" }
      ]
    },
    {
      category: "Software",
      skills: [
        { name: "AutoCAD", logo: "📝" },
        { name: "Inventor Professional", logo: "🐳" },
        { name: "Fusion 360", logo: "☁️" },
        { name: "Altium Designer", logo: "🍃" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <SkillCard 
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;