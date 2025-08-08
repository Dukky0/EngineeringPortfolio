import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "Battery Discharge Testbench",
      description: "A standalone testing system designed to safely discharge and analyze battery performance under controlled conditions. The testbench operates on an STM32 microcontroller platform and provides automated discharge cycles with data logging capabilities. This system enables the VT BOLT team to validate battery specifications, test discharge curves, and ensure battery safety protocols before integration into the electric motorcycle design.",
      technologies: ["Altium Designer", "PCB design", "Schematic Design", "Soldering", "Microcontroller Coding", "Software Coding", "STM32"],
      link: "/projects/ecommerce"
    },
    {
      title: "BOLT VT wiki",
      description: "A comprehensive knowledge management and data repository system built for the VT BOLT electric motorcycle team. The platform serves as a centralized hub for storing technical documentation, project data, design files, and institutional knowledge. This system enables team members to access critical information, collaborate effectively, and maintain continuity across academic years as team composition changes.",
      technologies: ["React", "TypeScript", "MongoDB", "HTML", "CSS"],
      link: "/projects/task-manager"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;