import React from 'react';
import SkillCard from './SkillCard';

import pythonLogo from '../media/python.png';
import javaLogo from '../media/java.png';
import jsLogo from '../media/javascript.png';
import tsLogo from '../media/typescript.svg';
import cppLogo from '../media/cpp.png';
import reactLogo from '../media/react.png';
import nodeLogo from '../media/node.png';
import htmlLogo from '../media/html.png';
import cssLogo from '../media/css.png';
import scssLogo from '../media/scss.png';
import expressLogo from '../media/express.png';
import gitLogo from '../media/git.png';
import dockerLogo from '../media/docker.webp';
import mongoLogo from '../media/mongodb.png';
import autocadLogo from '../media/autocad.svg';
import inventorLogo from '../media/inventor.svg';
import fusionLogo from '../media/fusion.webp';
import altiumLogo from '../media/altium.webp';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', logo: pythonLogo },
        { name: 'Java', logo: javaLogo },
        { name: 'JavaScript', logo: jsLogo },
        { name: 'TypeScript', logo: tsLogo },
        { name: 'C++', logo: cppLogo },
      ],
    },
    {
      category: 'Web Technologies',
      skills: [
        { name: 'React.js', logo: reactLogo },
        { name: 'Node.js', logo: nodeLogo },
        { name: 'HTML5', logo: htmlLogo },
        { name: 'CSS3', logo: cssLogo },
        { name: 'SCSS', logo: scssLogo },
        { name: 'Express.js', logo: expressLogo },
      ],
    },
    {
      category: 'Tools & Technologies',
      skills: [
        { name: 'Git', logo: gitLogo },
        { name: 'Docker', logo: dockerLogo },
        { name: 'MongoDB', logo: mongoLogo },
      ],
    },
    {
      category: 'Software',
      skills: [
        { name: 'AutoCAD', logo: autocadLogo },
        { name: 'Inventor Professional', logo: inventorLogo },
        { name: 'Fusion 360', logo: fusionLogo },
        { name: 'Altium Designer', logo: altiumLogo },
      ],
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className='title'>Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category.category} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;