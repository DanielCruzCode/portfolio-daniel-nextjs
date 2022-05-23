import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentType, useLayoutEffect, useState } from "react";
import { colors, zIndexLayers } from "styles/theme";

interface NavLinkProps {
  IconComponent: ComponentType;
  text: string;
  href: string;
}

export const BubbleLink = ({
  IconComponent,
  text,
  href = "",
}: NavLinkProps) => {
  const { pathname } = useRouter();

  const [activeClass, setActiveClass] = useState("");
  useLayoutEffect(() => {
    setActiveClass(pathname === href ? "active-bubble" : "");
  }, []);

  return (
    <>
      <Link href={href}>
        <a className={activeClass}>
          <div className="nav-bubble">
            <IconComponent />
          </div>
          <div className={`bubble-background ${activeClass}`}></div>
          <span className={`nav-bubble__text ${activeClass}`}>{text}</span>
        </a>
      </Link>
      <style jsx>{`
        a {
          align-items: center;
          display: flex;
          flex-direction: column;
          position: relative;
          text-decoration: none;
          color: ${colors.textsBaseColor};
          font-weight: bold;
          line-height: 17px;
        }

        .nav-bubble {
          background-color: ${colors.softGray};
          border-radius: 50%;
          display: grid;
          height: 48px;
          place-items: center;
          width: 48px;
          z-index: ${zIndexLayers.layer2};
          position: absolute;
          top: 0;
          transition: background-color 300ms ease-in, top 300ms ease-in;
        }

        .active-bubble .nav-bubble {
          background-color: ${colors.primary};
          top: -2.5rem;
        }

        .bubble-background {
          background-color: transparent;
          border-radius: 50%;
          height: 63px;
          position: absolute;
          top: -0.5rem;
          transition: background-color 400ms ease-in, box-shadow 400ms ease-in,
            height 400ms ease-in, width 400ms ease-in, top 400ms ease-in;
          width: 63px;
        }

        .bubble-background.active-bubble {
          box-shadow: 0 -6px 14px -6px #00000040;
          background-color: white;
          top: -3rem;
        }

        .nav-bubble__text {
          font-size: 16px;
          opacity: 0;
          transition: opacity 450ms ease-in;
        }

        .nav-bubble__text.active-bubble {
          position: relative;
          opacity: 1;
          top: 0.8rem;
          right: 0;
          left: 0;
          width: fit-content;
        }
      `}</style>
    </>
  );
};
