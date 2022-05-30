import { ComponentType, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  href: string;
  Icon: ComponentType;
}

export const SocialNetworkLink = ({ children, href, Icon }: Props) => {
  return (
    <>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon />
        {children}
      </a>
      <style jsx>{`
        a {
          border-radius: 100%;
        }
      `}</style>
    </>
  );
};
