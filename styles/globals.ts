import { boxShadow, colors, fontProperties } from "styles/theme";
import css from "styled-jsx/css";

export const globalStyles = css.global`
  // #region CSS Resets
  html,
  body {
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

  p {
    font-weight: 400;
    font-size: ${fontProperties.base};
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${colors.textsBaseColor};
  }

  a:any-link {
    color: ${colors.textsHighlightColor};
  }

  // #endregion CSS Resets

  // #region utility classes
  .br-10 {
    border-radius: 10px;
  }

  .hidden {
    display: none !important;
  }

  .b-shadow-md {
    box-shadow: ${boxShadow.buttons};
  }

  // #endregion utility classes
  .content-subtitle {
    font-style: normal;
    font-weight: 700;
    font-size: ${fontProperties.base};
    line-height: 26px;
    letter-spacing: 0.02em;
    color: ${colors.textsBaseColor};
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  hr {
    border: none;
    border-top: 1px solid #dcdcdc;
    max-width: 20.25rem;
    margin-inline: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .text-container,
  .content-subtitle,
  .content-text {
    max-width: 20.25rem;
    text-align: start;
    margin-inline: auto;
  }

  // #region animations
  .float {
    animation-name: ani-float;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes ani-float {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
  .float-2 {
    animation-name: ani-float-2;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.44, 0.41, 0.03, 0.46);
  }

  @keyframes ani-float-2 {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
  // #endregion animations

  // #region Media Queries
  @media (min-width: 1024px) {
    .text-container,
    .content-text {
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
