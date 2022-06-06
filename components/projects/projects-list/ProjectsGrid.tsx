import { nanoid } from "nanoid";
import { ProjectCard } from "components/projects/project-card/ProjectCard";
import { ProjectListStylesGrid } from "styles/components/projects/projects-list/ProjectsListStyles";
import { ProjectCardProps } from "types";
import data from "data/data.json";

export const ProjectsGrid = () => {
  const projects: ProjectCardProps[] = data.projects;

  return (
    <>
      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard {...project} key={nanoid() + "-project-card"} />
        ))}
      </section>
      <style jsx>{ProjectListStylesGrid}</style>
    </>
  );
};
