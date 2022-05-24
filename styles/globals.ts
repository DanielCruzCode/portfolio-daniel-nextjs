import { colors } from "./theme";
import css from "styled-jsx/css";

export const globalStyles = css.global`
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
    font-family: "Sen";
    accent-color: ${colors.primary};
  }

  *::before,
  *::after {
    box-sizing: border-box;
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
`;
