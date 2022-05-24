import { Avatar } from "components/commons/Avatar";
import { SocialNetworkLink } from "components/commons/SocialNetworkLink";
import {
  GitHubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "components/icons/social-networks/SocialNetworksIcons";
import MainLayout from "components/layout/main-layout/MainLayout";
import { ProfileMessage } from "messages/en/ProfileMessage";
import {
  profileGeneralStyles,
  socialNetworks,
} from "styles/pages/profile/ProfileStyles";

export default function Profile() {
  return (
    <>
      <MainLayout>
        <h1>Profile</h1>
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
        <p>{ProfileMessage.principalMessage}</p>
      </MainLayout>
      <style jsx>{profileGeneralStyles}</style>
      <style jsx>{socialNetworks}</style>
    </>
  );
}
