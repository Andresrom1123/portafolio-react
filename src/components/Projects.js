import "../assets/styles/jobs.css";
import React from "react";
import Project from "./Project";
import Title from "./Title";

const Projects = ({ projects, title }) => {
  return (
    <section className="-section -projects bg-light">
      <Title center title={title} />
      <div className="-section-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
