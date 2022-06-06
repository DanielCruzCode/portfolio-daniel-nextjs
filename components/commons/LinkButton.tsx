import { ReactNode } from "react";
import { linkButtonGeneralStyles } from "styles/components/commons/LinkButtonStyles";

interface Props {
  children: ReactNode;
  href: string;
  relevance: "primary" | "secondary";
}

export const LinkButton = ({ children, href, relevance }: Props) => {
  return (
    <>
      <a
        className={`link-button link-button--${relevance}`}
        target="_blank"
        href={href}
        rel="noreferrer"
      >
        {children}
      </a>
      <style jsx>{linkButtonGeneralStyles}</style>
    </>
  );
};
