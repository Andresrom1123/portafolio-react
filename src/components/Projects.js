import React, { useState, useEffect } from "react";
import Project from "./Project";
import Title from "./Title";

const Projects = ({ projects, title, white }) => {
  const [stateProjects, setStateProjects] = useState([])
  const [stack, setStack] = useState('django')

  useEffect(() => {
    if (stack === 'all') {
      setStateProjects(projects)
    } else {
      const projectsTemp = projects.filter((project) => {
        const condition = project.stack.find((i) => i.toLowerCase() === stack.toLowerCase())
        return condition
      })
      setStateProjects(projectsTemp)
    }
  }, [stack])

  return (
    <section className={`-section -projects ${!white && "bg-light"}`}>
      <Title center title={title} />
      <div className='d-flex justify-content-center section-title'>
        <span
          onClick={() => setStack('all')}
          className={`me-5 pointer ${stack === 'all' && 'active-btn'}`}
          style={{cursor: 'pointer'}}
        >
          All
        </span>
        <span
          onClick={() => setStack('react')}
          className={`me-5 pointer ${stack === 'react' && 'active-btn'}`}
          style={{cursor: 'pointer'}}
        >
          React
        </span>
        <span
          onClick={() => setStack('django')}
          className={`me-5 pointer ${stack === 'django' && 'active-btn'}`}
          style={{cursor: 'pointer'}}
        >
          Django
        </span>
      </div>
      <div className="-section-center">
        {stateProjects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
