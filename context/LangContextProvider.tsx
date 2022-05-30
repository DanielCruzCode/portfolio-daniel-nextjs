import { ReactNode, useState } from "react";
import { IntlProvider } from "react-intl";

import { Languages, LanguagesEnum } from "types";

import { langContext } from "context/LangContext";
import englishMessages from "langs/en.json";
import spanishMessages from "langs/es.json";

interface Props {
  children: ReactNode;
}

const MESSAGES_CONFIGURATION_INITIAL_STATE = {
  lang: englishMessages,
  locale: "en",
};

const MESSAGES_CONFIGURATION = {
  en: { lang: englishMessages, locale: LanguagesEnum.english },
  es: { lang: spanishMessages, locale: LanguagesEnum.spanish },
};

const MESSAGES_CONFIGURATION_DEFAULT = {
  lang: englishMessages,
  locale: LanguagesEnum.english,
};

/**
 * Lang Context Provider
 * @param children
 */
export const LangProvider = ({ children }: Props) => {
  const [messages, setMessages] = useState(
    MESSAGES_CONFIGURATION_INITIAL_STATE
  );

  const handleSwitchLanguage = (language: Languages): void => {
    setMessages(
      MESSAGES_CONFIGURATION[language] || MESSAGES_CONFIGURATION_DEFAULT
    );
  };

  return (
    <langContext.Provider value={{ handleSwitchLanguage }}>
      <IntlProvider messages={messages.lang} locale={messages.locale}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};
