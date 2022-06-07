import { colors, fontProperties } from "styles/theme";
import css from "styled-jsx/css";

export const globalStyles = css.global`
  // #region CSS Resets
  html,
  body {
    scroll-behavior: smooth;
    height: 100%;
    color: ${colors.textsBaseColor};
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    font-family: ${fontProperties.primaryFont};
    accent-color: ${colors.primary};
    outline-color: ${colors.primary};
    outline-width: 5px;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::selection {
    background-color: ${colors.softPrimary};
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    text-align: center;
  }

  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: start;
  }

  p {
    font-weight: 400;
    font-size: ${fontProperties.base};
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${colors.textsBaseColor};
    text-align: start;
  }

  a:any-link {
    color: ${colors.textsHighlightColor};
  }

  hr {
    border: none;
    border-top: 1px solid #dcdcdc;
    margin-inline: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }

  // #endregion CSS Resets
  .content-subtitle {
    font-style: normal;
    font-weight: 700;
    font-size: ${fontProperties.base};
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${colors.textsBaseColor};
    margin-bottom: 1rem;
    margin-top: 1rem;
    text-align: start;
  }

  .text-container {
    max-width: 20.25rem;
    text-align: start;
    margin-inline: auto;
  }

  // #region Media Queries
  @media (min-width: 1024px) {
    .text-container {
      max-width: 75ch;
    }

    details > .sum-tooltip-container {
      position: absolute;
      top: 2rem;
    }

    details[open] > .sum-tooltip-container > .sum-tooltip {
      padding: 0.5rem 1rem;
      width: max-content;
    }

    .sum-tooltip-close-btn {
      display: none;
    }
  }
  // #endregion Media Queries
`;
