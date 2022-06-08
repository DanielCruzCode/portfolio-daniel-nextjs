import css from "styled-jsx/css";
import { zIndexLayers } from "styles/theme";

export const button = css`
  button {
    border: 1px solid gray;
    background-color: white;
  }
`;

export const blobs = css.global`
  .blob-bubble-left,
  .blob-bubble-right {
    position: fixed;
  }

  .blob-bubble-left {
    left: -5rem;
    top: -2rem;
  }

  .blob-bubble-right {
    right: 0;
  }

  @media (min-width: 1040px) {
    .blob-bubble-left {
      left: -6rem;
      transform: rotateZ(0deg);
    }
    .blob-bubble-right {
      transform: rotateZ(166deg);
      right: -4rem;
      top: -1rem;
    }
  }
`;

export const container = css`
  main {
    padding-top: 2.75rem;
    padding-bottom: 8rem;
    position: relative;
    z-index: ${zIndexLayers.layer1};
  }
`;
