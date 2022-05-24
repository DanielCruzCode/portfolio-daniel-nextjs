import {
  ContactIcon,
  KnowledgeIcon,
  ProfileIcon,
  WorkingExpIcon,
} from "components/icons/nav-bar-icons/NavBarIcons";
import { navBar } from "styles/components/nav-bar/NavBarStyles";
import { BubbleLink } from "./BubbleLink";

export default function NavBar() {
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
                text="Working experience"
              />
            </li>
            <li>
              <BubbleLink
                href="/knowledge"
                IconComponent={WorkingExpIcon}
                text="Knowledge"
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
