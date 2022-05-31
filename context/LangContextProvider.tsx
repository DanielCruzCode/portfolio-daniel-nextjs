import { ReactNode, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import { LanguagesEnum } from "types";

import { langContext } from "context/LangContext";
import englishMessages from "langs/en.json";
import spanishMessages from "langs/es.json";
import { useRouter } from "next/router";

const MESSAGES_CONFIGURATION_INITIAL_STATE = {
  lang: englishMessages,
  locale: LanguagesEnum.english,
};

const MESSAGES_CONFIGURATION: any = {
  en: { lang: englishMessages, locale: LanguagesEnum.english },
  es: { lang: spanishMessages, locale: LanguagesEnum.spanish },
};

const MESSAGES_CONFIGURATION_DEFAULT = {
  lang: englishMessages,
  locale: LanguagesEnum.english,
};

interface Props {
  children: ReactNode;
}
/**
 * Lang Context Provider
 * @param children
 */
export const LangProvider = ({ children }: Props) => {
  const router = useRouter();
  const locale: string =
    router.locale || MESSAGES_CONFIGURATION_INITIAL_STATE.locale;
  const [messages, setMessages] = useState(
    MESSAGES_CONFIGURATION_INITIAL_STATE
  );

  useEffect(() => {
    setMessages(
      MESSAGES_CONFIGURATION[locale] || MESSAGES_CONFIGURATION_DEFAULT
    );
  }, [locale]);

  return (
    <langContext.Provider value={{}}>
      <IntlProvider messages={messages.lang} locale={messages.locale}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};
