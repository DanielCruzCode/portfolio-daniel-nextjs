import { useEffect, useState } from "react";

export const useCurrentViewportSize = () => {
  const [currentViewportSize, setCurrentViewportSize] = useState(0);

  useEffect(() => {
    const handleViewportWidth = () => {
      const viewportWidth = window.innerWidth;
      setCurrentViewportSize(viewportWidth);
    };

    const handleCurrentWidth = () => {
      const viewportWidth = window.innerWidth;
      setCurrentViewportSize(viewportWidth);
    };

    window.addEventListener("resize", handleViewportWidth);
    handleCurrentWidth();

    return () => {
      window.removeEventListener("resize", handleViewportWidth);
    };
  }, []);

  return {
    currentViewportSize,
  };
};
