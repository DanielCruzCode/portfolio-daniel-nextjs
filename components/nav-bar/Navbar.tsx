import {
  ContactIcon,
  KnowledgeIcon,
  ProfileIcon,
  WorkingExpIcon,
} from "components/icons/nav-bar-icons/NavBarIcons";
import { BubbleLink } from "./BubbleLink";
import { navBar } from "./NavBarStyles";

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
