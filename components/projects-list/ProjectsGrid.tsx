import { ProjectListStylesGrid } from "styles/components/projects-list/ProjectsListStyles";
import { ProjectCardProps } from "types";
import { ProjectCard } from "./project-card/ProjectCard";
import { useId } from "react";

export const ProjectsGrid = () => {
  const id = useId();

  const projects: ProjectCardProps[] = [
    {
      imgSrc: "/imgs/projects/react.png",
      cardText: "React.js Notes app",
      techsIcons: [
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
      ],
      urlToCode: "/#",
      urlToDemo: "/#",
    },
    {
      imgSrc: "/imgs/projects/express-node.png",
      cardText: "Express API",
      techsIcons: [
        {
          src: "/imgs/technologies/node.png",
          alt: "Node.js icon",
        },
      ],
      urlToCode: "/#",
      urlToDemo: "/#",
    },
  ];

  return (
    <>
      <section className="projects-grid">
        {projects.map((project) => (
          <ProjectCard {...project} key={id + "-project-card"} />
        ))}
      </section>
      <style jsx>{ProjectListStylesGrid}</style>
    </>
  );
};
