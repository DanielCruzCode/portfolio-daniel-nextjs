import { createContext } from "react";

import { LanguageContext } from "types";

/**
 * Lang Context
 */
export const langContext = createContext<LanguageContext>({
  handleSwitchLanguage: (): void => undefined,
});
