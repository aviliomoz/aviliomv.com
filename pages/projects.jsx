import moment from "moment";

import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../utils/projects";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);

  return (
    <div className="projects">
      {projects &&
        projects
          .sort(
            (a, b) =>
              Number(moment(b.year, "YYYY")) - Number(moment(a.year, "YYYY"))
          )
          .map((project) => {
            return <ProjectCard key={project.id} project={project} />;
          })}
    </div>
  );
};

export default ProjectsPage;
