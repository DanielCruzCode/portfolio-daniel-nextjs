import { useLangContext } from "hooks/useLangContext";
import { ChangeEvent } from "react";
import { boxShadow, fontProperties, zIndexLayers } from "styles/theme";
import { LanguagesEnum } from "types";

export const LanguageSwitcher = () => {
  const { handleSwitchLanguage } = useLangContext();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang: string = event.target.value;
    handleSwitchLanguage(lang);
  };

  return (
    <>
      <div className="lang-container">
        <select
          name="language-switcher"
          id="language-switcher"
          className="language-switcher"
          onChange={handleLanguageChange}
        >
          <option value={LanguagesEnum.english}>EN</option>
          <option value={LanguagesEnum.spanish}>ES</option>
        </select>
      </div>
      <style jsx>{`
        .lang-container {
          position: fixed;
          top: 0.5rem;
          right: 0.5rem;
          background-color: white;
          z-index: ${zIndexLayers.layer2};
          box-shadow: ${boxShadow.soft};
          border-radius: 17px;
          overflow: hidden;
          padding: 0.25rem 0.3125rem 0.1875rem;
        }

        .language-switcher {
          border: none;
          background-color: white;
          outline-offset: 0.3rem;
          font-size: ${fontProperties.base};
          font-weight: bold;
          border-radius: 1.0625rem;
        }

        .language-switcher:focus {
        }
      `}</style>
    </>
  );
};
