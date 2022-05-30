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

export enum LanguagesEnum {
  /* eslint no-unused-vars: "off" */
  /* This enum actually is used, eslint haven't detect them uses */
  spanish = "es",
  english = "en",
}

export type Languages = "es" | "en";

export interface LanguageContext {
  handleSwitchLanguage: (language: any) => void;
}

// Formatjs
export type MessageDescriptor = {
  id?: string;
  defaultMessage?: string;
  description?: string;
};
