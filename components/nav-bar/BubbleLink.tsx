import Link from "next/link";
import { useRouter } from "next/router";
import { ComponentType, memo, useState } from "react";
import { bubbleLink } from "styles/components/nav-bar/BubbleLinkStyles";

interface NavLinkProps {
  IconComponent: ComponentType;
  text: string;
  href: string;
}

const BubbleLink = ({ IconComponent, text, href = "" }: NavLinkProps) => {
  const { pathname } = useRouter();

  console.log("Re-render");

  const [activeClass, setActiveClass] = useState("");
  setTimeout(() => {
    setActiveClass(pathname === href ? "active-bubble" : "");
  }, 100);

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
      <style jsx>{bubbleLink}</style>
    </>
  );
};

export default memo(BubbleLink);
