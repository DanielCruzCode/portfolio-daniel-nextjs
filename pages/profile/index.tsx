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
import { FormattedMessageToHTML } from "components/formatted-message/FormattedMessageToHTML";

export default function Profile() {
  return (
    <>
      <MainLayout>
        <h1>
          <FormattedMessageToHTML id="profile-page.title" />
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
        <div className="text-container">
          <FormattedMessageToHTML
            id="profile-page.principal-message"
            additionalValues={{
              a: (chunks: any) => (
                <a href="https://rockcontent.com/es/blog/que-es-engagement/">
                  {chunks}
                </a>
              ),
            }}
          />
        </div>
      </MainLayout>
      <style jsx>{profileGeneralStyles}</style>
      <style jsx>{socialNetworks}</style>
    </>
  );
}
