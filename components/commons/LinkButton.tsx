import { ReactNode } from "react";
import { boxShadow, colors, fontProperties } from "styles/theme";

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
      <style jsx>{`
        .link-button {
          border-radius: 5px;
          color: ${colors.textsBaseColor};
          cursor: pointer;
          font-family: ${fontProperties.secondaryFont};
          min-width: 7.3125rem;
          overflow: hidden;
          padding: 0.4375rem 1.1875rem 0.5625rem;
          text-align: center;
          text-decoration: none;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: auto;
        }

        .link-button--primary {
          background-color: ${colors.primary};
        }

        .link-button--primary:hover {
          box-shadow: ${boxShadow.buttons};
          transition: box-shadow 200ms cubic-bezier(0.41, 0.46, 0.5, 0.91);
        }

        .link-button--secondary {
          background-color: transparent;
        }

        .link-button--secondary:hover {
          text-decoration-color: ${colors.primary};
          text-decoration-style: wavy;
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
};
