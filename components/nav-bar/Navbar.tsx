import {
  ContactIcon,
  KnowledgeIcon,
  ProfileIcon,
  WorkingExpIcon,
} from "components/icons/nav-bar-icons/NavBarIcons";
import { memo } from "react";
import { navBar } from "styles/components/nav-bar/NavBarStyles";
import BubbleLink from "./BubbleLink";

function NavBar() {
  return (
    <>
      <div className="navContainer">
        <nav>
          <ul>
            <li>
              <BubbleLink
                href="/profile"
                IconComponent={ProfileIcon}
                text="Profile"
              />
            </li>
            <li>
              <BubbleLink
                href="/working-experience"
                IconComponent={KnowledgeIcon}
                text="Experiencia laboral"
              />
            </li>
            <li>
              <BubbleLink
                href="/knowledge"
                IconComponent={WorkingExpIcon}
                text={"Conocimientos"}
              />
            </li>
            <li>
              <BubbleLink
                href="/contact"
                IconComponent={ContactIcon}
                text="Contact"
              />
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{navBar}</style>
    </>
  );
}

export default memo(NavBar);
