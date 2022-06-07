import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { createIntl, createIntlCache, IntlProvider } from "react-intl";

import { langContext } from "context/LangContext";
import {
  MESSAGES_CONFIG,
  MESSAGES_CONFIG_DEFAULT,
  MESSAGES_CONFIG_INITIAL_STATE,
} from "./LangConsts";

interface Props {
  children: ReactNode;
}
/**
 * Lang Context Provider
 * @param children
 */
export const LangProvider = ({ children }: Props) => {
  const router = useRouter();
  const locale: string = router.locale || MESSAGES_CONFIG_INITIAL_STATE.locale;
  const [messages, setMessages] = useState(MESSAGES_CONFIG_INITIAL_STATE);
  const cache = createIntlCache();
  const intl = createIntl(
    {
      locale,
      messages: messages.lang,
    },
    cache
  );

  useEffect(() => {
    setMessages(MESSAGES_CONFIG[locale] || MESSAGES_CONFIG_DEFAULT);
  }, [locale]);

  return (
    <langContext.Provider value={{ intl }}>
      <IntlProvider messages={messages.lang} locale={messages.locale}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};
