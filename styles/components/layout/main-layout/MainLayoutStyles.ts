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
`;

export const container = css`
  main {
    padding-top: 2.75rem;
    padding-bottom: 8rem;
    position: relative;
    z-index: ${zIndexLayers.layer1};
  }
`;
