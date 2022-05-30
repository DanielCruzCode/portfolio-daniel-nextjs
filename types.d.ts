type TechIcon = {
  src: string;
  alt: string;
};

export interface ProjectCardProps {
  imgSrc: string;
  cardText: string;
  techsIcons: Array<TechIcon>;
  urlToCode: string;
  urlToDemo: string;
}

// Formatjs
export type MessageDescriptor = {
  id?: string;
  defaultMessage?: string;
  description?: string;
};
