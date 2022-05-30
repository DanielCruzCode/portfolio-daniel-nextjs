import { Avatar } from "components/commons/Avatar";
import { SocialNetworkLink } from "components/commons/SocialNetworkLink";
import MainLayout from "components/layout/main-layout/MainLayout";
import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons/social-networks/SocialNetworksIcons";
import {
  profileGeneralStyles,
  socialNetworks,
} from "styles/pages/profile/ProfileStyles";
import { FormattedMessage } from "react-intl";

export default function Profile() {
  return (
    <>
      <MainLayout>
        <h1>
          <FormattedMessage id="profile-page.title" />
        </h1>
        <div className="avatar">
          <Avatar />
        </div>
        <div className="social-networks">
          <SocialNetworkLink
            href="https://www.linkedin.com/in/daniel-cruz-wd/"
            Icon={LinkedinIcon}
          />
          <SocialNetworkLink
            href="https://github.com/danielcruzcode"
            Icon={GitHubIcon}
          />
          <SocialNetworkLink
            href="https://twitter.com/DanielCruzV3"
            Icon={TwitterIcon}
          />
        </div>
        <p className="content-text">
          <FormattedMessage
            id="profile-page.principal-message"
            defaultMessage="Content"
            values={{
              strong: (chunks) => <strong>{chunks}</strong>,
            }}
          />
          {/* TODO: Make a FormattedMessageFromHTML to use it like HTML converter */}
        </p>
      </MainLayout>
      <style jsx>{profileGeneralStyles}</style>
      <style jsx>{socialNetworks}</style>
    </>
  );
}
