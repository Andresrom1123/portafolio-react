import Projects from "../components/Projects";
import { projects } from "../data/experience&projects";

const ProjectsPage = () => {
  return (
    <section>
      <Projects white title="projects and practices" projects={projects} />
    </section>
  );
};

export default ProjectsPage;
