import css from "styled-jsx/css";
import { boxShadow } from "styles/theme";

export const navBar = css`
  .navContainer {
    bottom: 1rem;
    left: 0;
    position: fixed;
    right: 0;
  }

  nav {
    background-color: white;
    border-radius: 10px;
    box-shadow: ${boxShadow.normal};
    margin-inline: auto;
    padding: 0.75rem 0.75rem 0.5rem;
    width: clamp(18.75rem, 20.4375rem, 31.25rem);
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 0;
    min-height: 3rem;
  }

  li {
    width: 24%;
    text-align: center;
  }
`;
