import css from "styled-jsx/css";
import { boxShadow, colors } from "styles/theme";

export const defaultStyles = css.global`
  details {
    display: inline;
    position: relative;
    cursor: pointer;
  }

  details > summary::marker {
    content: "🤔";
  }

  details > summary {
    color: ${colors.textsHighlightColor};
  }

  details > .sum-tooltip-container {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    left: 0;
    top: 3rem;
  }
  details > .sum-tooltip-container > .sum-tooltip {
    opacity: 0;
    transform: translateY(-25px);
    transition: opacity 350ms ease, transform 350ms ease;
  }
  details[open] > .sum-tooltip-container > .sum-tooltip {
    background-color: white;
    border-radius: 10px;
    box-shadow: ${boxShadow.center};
    max-width: 20rem;
    padding: 3rem 1rem 1rem 1rem;
    position: absolute;
    opacity: 1;
    transform: translateY(0);
    max-height: 78vh;
    overflow-y: auto;
    cursor: auto;
  }

  .sum-tooltip-close-btn {
    background-color: transparent;
    border-color: transparent;
    cursor: pointer;
    font-weight: bold;
    left: 0;
    position: absolute;
    right: 0;
    text-decoration-color: ${colors.primary};
    text-decoration-line: underline;
    text-decoration-style: wavy;
    top: 0;
  }
`;
