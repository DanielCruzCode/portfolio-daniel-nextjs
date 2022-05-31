import { ChangeEvent } from "react";
import { useRouter } from "next/router";
import { LanguageSwitcherStyles } from "styles/components/layout/main-layout/LanguageSwitcherStyles";
import { LanguagesEnum } from "types";

export const LanguageSwitcher = () => {
  const router = useRouter();

  const handleLanguageChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const lang: string = event.target.value;

    router.push(router.asPath, router.asPath, {
      locale: lang,
    });
  };

  return (
    <>
      <div className="lang-container">
        <select
          name="language-switcher"
          id="language-switcher"
          className="language-switcher"
          onChange={handleLanguageChange}
          value={router.locale}
        >
          <option value={LanguagesEnum.english}>{LanguagesEnum.english}</option>
          <option value={LanguagesEnum.spanish}>{LanguagesEnum.english}</option>
        </select>
      </div>
      <style jsx>{LanguageSwitcherStyles}</style>
    </>
  );
};
