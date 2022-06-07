import { useContext } from "react";

import { langContext } from "context/LangContext";

export const useLangContext = () => useContext(langContext);
