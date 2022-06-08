import css from "styled-jsx/css";
import { colors } from "./theme";

export const animations = css.global`
  // #region animations
  .float {
    animation-name: ani-float;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes ani-float {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
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
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 5px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
  .float-3 {
    animation-name: ani-float-3;
    animation-duration: 8s;
    animation-iteration-count: infinite;
    animation-timing-function: cubic-bezier(0.44, 0.41, 0.03, 0.46);
  }

  @keyframes ani-float-3 {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, -8px);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  .link-highlight {
    animation-name: ani-link-highlight;
    animation-duration: 1000ms;
    animation-timing-function: ease-in;
    scroll-margin-top: 5em;
    border-radius: 20px;
  }
  @keyframes ani-link-highlight {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: ${colors.softPrimary};
    }
    100% {
      background-color: transparent;
    }
  }

  .fade-in {
    animation-name: ani-fade-in;
    animation-duration: 300ms;
    animation-timing-function: ease-in;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  @keyframes ani-fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  // #endregion animations
`;
