import { langContext } from "context/LangContext";
import { useContext } from "react";

/**
 * useLangContext hook
 */
export const useLangContext = () => useContext(langContext);
