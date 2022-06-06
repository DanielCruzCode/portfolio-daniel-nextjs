import Image from "next/image";
import { FormattedMessage } from "react-intl";
import { ProjectListStylesCard } from "styles/components/projects/projects-list/ProjectsListStyles";
import { LinkButton } from "components/commons/LinkButton";
import { ProjectCardProps } from "types";
import { nanoid } from "nanoid";

export const ProjectCard = ({
  imgSrc,
  cardText,
  techsIcons,
  urlToCode,
  urlToDemo,
}: ProjectCardProps) => {
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
            quality={100}
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
                quality={100}
                key={nanoid() + "-tech-icon"}
              />
            ))}
          </div>
        </div>
        <div className="project-card__footer">
          <LinkButton relevance="primary" href={urlToCode}>
            <FormattedMessage id="projects.view-code" />
          </LinkButton>
          <LinkButton relevance="secondary" href={urlToDemo}>
            <FormattedMessage id="projects.demo" />
          </LinkButton>
        </div>
      </div>
      <style jsx>{ProjectListStylesCard}</style>
    </>
  );
};
