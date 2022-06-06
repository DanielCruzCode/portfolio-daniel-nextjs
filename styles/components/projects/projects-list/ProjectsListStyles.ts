import css from "styled-jsx/css";
import { boxShadow } from "styles/theme";

export const ProjectListStylesGrid = css`
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    place-items: center;
    margin-top: 7rem;
    row-gap: 6rem;
  }

  @media (min-width: 1024px) {
    .projects-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      place-items: center;
      margin-top: 7rem;
      row-gap: 6rem;
    }
  }
`;
export const ProjectListStylesCard = css`
  p {
    text-align: center;
    width: 100%;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .projects-card {
    background-color: white;
    border-radius: 10px;
    box-shadow: ${boxShadow.normal};
    display: flex;
    flex-direction: column;
    min-height: 14.5rem;
    height: 100%;
    padding: 1.5625rem;
    position: relative;
    width: 18.3125rem;
  }

  .projects-card__img {
    display: flex;
    height: 130px;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    top: -75px;
  }
  .project-card__content {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    height: 70%;
    justify-content: flex-end;
  }
  .project-card__techs {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
  }
  .project-card__footer {
    align-items: flex-end;
    display: flex;
    height: 30%;
    justify-content: space-between;
  }
`;
