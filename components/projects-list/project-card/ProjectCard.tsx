import Image from "next/image";
import { ProjectListStylesCard } from "styles/components/projects-list/ProjectsListStyles";
import { LinkButton } from "components/commons/LinkButton";
import { ProjectCardProps } from "types";
import { useId } from "react";

const MAXIMUM_OF_TECHS_ICONS = 4;

export const ProjectCard = ({
  imgSrc,
  cardText,
  techsIcons,
  urlToCode,
  urlToDemo,
}: ProjectCardProps) => {
  const id = useId();

  return (
    <>
      <div className="projects-card">
        <div className="projects-card__img float-2">
          <Image
            className="br-10"
            src={imgSrc}
            alt={cardText}
            width={190}
            height={130}
            objectFit="cover"
          />
        </div>
        <div className="project-card__content">
          <p>{cardText}</p>
          <div className="project-card__techs">
            {techsIcons.slice(0, 4).map(({ src, alt }) => (
              <Image
                src={src}
                alt={alt}
                width={32}
                height={32}
                key={id + "-tech-icon"}
              />
            ))}
            {/* TODO: Translate this message */}
          </div>
          {techsIcons.length === MAXIMUM_OF_TECHS_ICONS && <p>...and more</p>}
          {/* TODO: This have errors */}
        </div>
        <div className="project-card__footer">
          <LinkButton relevance="primary" href={urlToCode}>
            View code
          </LinkButton>
          <LinkButton relevance="secondary" href={urlToDemo}>
            Demo
          </LinkButton>
        </div>
      </div>
      <style jsx>{ProjectListStylesCard}</style>
    </>
  );
};
