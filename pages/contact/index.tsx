import { FormattedMessage, injectIntl, IntlShape } from "react-intl";

import MainLayout from "components/layout/main-layout/MainLayout";
import { ContactPage } from "messages/ContactPage";
import {
  TelegramIcon,
  WhatsappIcon,
} from "components/icons/social-networks/SocialNetworksIcons";
import { SocialNetworkLink } from "components/commons/SocialNetworkLink";
import data from "data/data.json";
import { ContactStyles } from "styles/pages/contact/ContactStyles";

interface Props {
  intl: IntlShape;
}

const Contact = ({ intl }: Props) => {
  return (
    <>
      <MainLayout>
        <h1>
          <FormattedMessage id="contact-page.title" />
        </h1>
        <div className="text-container">
          <FormattedMessage id="contact-page.main-content" />
        </div>
        <div className="email-input-container">
          <label htmlFor="guest-user-email">
            <FormattedMessage id="contact-page.input-label" />
          </label>
          <input
            type="email"
            name="guest-user-email"
            id="guest-user-email"
            placeholder={intl.formatMessage(ContactPage.emailPlaceholder)}
          />
          {/* TODO: Make this works with nodemailer */}
          <p className="send-me-message txt-center">
            <FormattedMessage id="contact-page.send-me-message" />
          </p>
          <div className="chat-bubbles">
            <SocialNetworkLink
              Icon={WhatsappIcon}
              href={data?.contact?.whatsappLink}
            />
            <SocialNetworkLink
              Icon={TelegramIcon}
              href={data?.contact?.telegramLink}
            />
          </div>
        </div>
      </MainLayout>
      <style jsx>{ContactStyles}</style>
    </>
  );
};

export default injectIntl(Contact);
