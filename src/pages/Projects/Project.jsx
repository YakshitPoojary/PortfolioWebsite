import { useEffect, useState } from 'react';
import ProjectCard from '../../component/ProjectCard/ProjectCard';
import { getProjects } from '../api/projects';
import './Project.css';

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      const fetchedProjects = await getProjects();
      setProjects(fetchedProjects);
    }

    fetchProjects();
  }, []);

  return (
    <>
      <h3>Stuff I've Built So Far</h3>
      <div className='projectContainer'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
};



export default Project;
