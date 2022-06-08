import { injectIntl, IntlShape } from "react-intl";

import {
  ContactIcon,
  KnowledgeIcon,
  ProfileIcon,
  WorkingExpIcon,
} from "components/icons/nav-bar-icons/NavBarIcons";
import { navBar } from "styles/components/nav-bar/NavBarStyles";
import BubbleLink from "./BubbleLink";
import { BubbleLinkMessages } from "messages/BubbleLinkMessages";
import { BackToTopButton } from "components/layout/main-layout/BackToTopButton";

interface Props {
  intl: IntlShape;
}

const NavBar = ({ intl }: Props) => {
  return (
    <>
      <div className="navContainer">
        <BackToTopButton />
        <nav>
          <ul>
            <li>
              <BubbleLink
                href="/profile"
                IconComponent={ProfileIcon}
                text={intl.formatMessage(BubbleLinkMessages.profileTitle)}
              />
            </li>
            <li>
              <BubbleLink
                href="/working-experience"
                IconComponent={KnowledgeIcon}
                text={intl.formatMessage(BubbleLinkMessages.workingXpTitle)}
              />
            </li>
            <li>
              <BubbleLink
                href="/knowledge"
                IconComponent={WorkingExpIcon}
                text={intl.formatMessage(BubbleLinkMessages.knowledgeTitle)}
              />
            </li>
            <li>
              <BubbleLink
                href="/contact"
                IconComponent={ContactIcon}
                text={intl.formatMessage(BubbleLinkMessages.contactTitle)}
              />
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{navBar}</style>
    </>
  );
};

export default injectIntl(NavBar);
