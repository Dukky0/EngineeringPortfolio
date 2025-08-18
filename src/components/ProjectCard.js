import React from 'react';
import { ExternalLink } from 'lucide-react';

const ProjectCard = ({ project, onNavigate }) => {
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('ProjectCard clicked!');
    console.log('Project link:', project.link);
    console.log('onNavigate function:', onNavigate);
    
    if (onNavigate && typeof onNavigate === 'function') {
      console.log('Calling onNavigate with:', project.link);
      onNavigate(project.link);
    } else {
      console.error('onNavigate is not a function or is undefined');
    }
  };

  return (
    <div className="project-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <div className="project-image">
        <div className="project-overlay">
          <button
            className="project-link"
            onClick={handleClick}
            type="button"
          >
            <ExternalLink />
          </button>
        </div>
      </div>
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;