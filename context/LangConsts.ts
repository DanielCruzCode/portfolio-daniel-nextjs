import englishMessages from "langs/en.json";
import spanishMessages from "langs/es.json";

import { LanguagesEnum } from "types";

export const MESSAGES_CONFIG_INITIAL_STATE = {
  lang: englishMessages,
  locale: LanguagesEnum.english,
};

export const MESSAGES_CONFIG: any = {
  en: { lang: englishMessages, locale: LanguagesEnum.english },
  es: { lang: spanishMessages, locale: LanguagesEnum.spanish },
};

export const MESSAGES_CONFIG_DEFAULT = {
  lang: englishMessages,
  locale: LanguagesEnum.english,
};
