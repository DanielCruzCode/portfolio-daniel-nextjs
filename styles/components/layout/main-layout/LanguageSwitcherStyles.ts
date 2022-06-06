import css from "styled-jsx/css";
import { boxShadow, fontProperties, zIndexLayers } from "styles/theme";

export const LanguageSwitcherStyles = css`
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
    text-transform: uppercase;
  }

  @media (min-width: 1024px) {
    .lang-container {
      top: 5vh;
      right: 18vw;
    }
  }
`;
