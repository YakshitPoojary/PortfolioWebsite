import React from 'react';
import './ExperienceCard.css';

const experience = [
  {
    "id": 1,
    "role": "Web developer",
    "duration": "December 2023 - Present",
    "description": [
      "Part of front-end team for academic records website, using React.js for a user-friendly interface.",
      "Leading frontend integration with Django for seamless functionality and data sync."
    ]
  },
  {
    "id": 2,
    "role": "Web developer",
    "duration": "December 2023 - Present",
    "description": [
      "Designed and developed a dynamic website for Geotagged products.",
      "Took charge of Backend development utilizing PHP, ensuring seamless integration and functionality.",
      "Implemented jQuery to enhance user interactivity and improve overall user experience"
    ]
  },
  {
    "id": 3,
    "role": "Adversarial Machine Learning Intern",
    "duration": "August 2023 - October 2023",
    "description": [
      "Conducted testing of image recognition models to assess vulnerabilities to attacks.",
      "Analyzed model performance to improve robustness and security."
    ]
  }
];

const ExperienceCard = () => {
  return (
    <>
      <div className='expContainer'>
        <p className='line square'>[</p>
          {experience.map((exp, index) => (
            <div key={exp.id}>
              <p className='line bracket'>&nbsp;&nbsp;&nbsp;&nbsp;&#123;</p>
              <p className='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='titles'>"role"</span>: "{exp.role}"</p>
              <p className='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='titles'>"duration"</span>: "{exp.duration}"</p>
              <p className='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='titles'>"description"</span>: <span className='square'>[</span></p>
              {exp.description.map((statement, idx) => (
                <p className='line' key={idx}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"{statement}"{idx < exp.description.length - 1 ? ',' : ''}</p>
              ))}
              <p className='line'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='square'>]</span></p>
              {index < experience.length - 1 && <p className='line bracket'>&nbsp;&nbsp;&nbsp;&nbsp;&#125;,</p>}
              {index === experience.length - 1 && <p className='line bracket'>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>}
            </div>
          ))}
        <p className='line square'>]</p>
      </div>
    </>
  );
};

export default ExperienceCard;
