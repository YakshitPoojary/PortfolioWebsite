import React from 'react';
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    return (
      <div className='card'>
        <img src={project.image} height={200} width={370} alt={project.name} className='projectImages'/>
        <div className='projectContent'>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <div className='tags'>
            {project.tags.map((tag) => (
              <span key={tag} className={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className='cta'>
            {project.source_code && (
              <a
                href={project.source_code}
                target="_blank"
                rel="noopener noreferrer"
                className='underline'
              >
                Source Code
              </a>
            )}
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className='underline'
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;