import css from "styled-jsx/css";
import { boxShadow } from "styles/theme";

export const generalStyles = css`
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    row-gap: 2rem;
    margin-top: 5.0625rem;
  }

  .tech-bubble {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: white;
    box-shadow: ${boxShadow.buttons};
  }

  .tech-bubble:hover {
    animation: 2000ms cubic-bezier(0.75, 0.25, 0.25, 0.75) infinite ani-float-3;
  }

  @media (min-width: 1024px) {
    .grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;
