import css from "styled-jsx/css";
import { boxShadow, colors, fontProperties } from "styles/theme";

export const linkButtonGeneralStyles = css`
  .link-button {
    border-radius: 5px;
    color: ${colors.textsBaseColor};
    cursor: pointer;
    font-family: ${fontProperties.secondaryFont};
    min-width: 7.3125rem;
    overflow: hidden;
    padding: 0.4375rem 1.1875rem 0.5625rem;
    text-align: center;
    text-decoration: none;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: auto;
  }

  .link-button--primary {
    background-color: ${colors.primary};
  }

  .link-button--primary:hover {
    box-shadow: ${boxShadow.center};
    transition: box-shadow 200ms cubic-bezier(0.41, 0.46, 0.5, 0.91);
  }

  .link-button--secondary {
    background-color: transparent;
  }

  .link-button--secondary:hover {
    text-decoration-color: ${colors.primary};
    text-decoration-style: wavy;
    text-decoration-line: underline;
  }
`;
