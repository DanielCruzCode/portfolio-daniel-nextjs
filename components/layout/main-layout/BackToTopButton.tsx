import { boxShadow, colors } from "styles/theme";
import { useScroll } from "../../../hooks/useScroll";

const MINIMUN_SCROLL_Y = 700;

export const BackToTopButton = () => {
  const { pageYOffset } = useScroll();
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  console.log("Steps");

  return (
    <>
      {pageYOffset >= MINIMUN_SCROLL_Y && (
        <button onClick={handleScrollToTop} className="float-3 fade-in">
          🔝
        </button>
      )}
      <style jsx>{`
        button {
          background-color: ${colors.softPrimary};
          box-shadow: ${boxShadow.normal};
          border-radius: 50%;
          border: transparent;
          cursor: pointer;
          height: 45px;
          left: 0;
          margin-inline: auto;
          position: absolute;
          right: 0;
          top: -5rem;
          width: 45px;
        }
      `}</style>
    </>
  );
};
