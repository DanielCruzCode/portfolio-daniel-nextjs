import css from "styled-jsx/css";
import { boxShadow } from "./theme";

export const utilityClasses = css.global`
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
`;
