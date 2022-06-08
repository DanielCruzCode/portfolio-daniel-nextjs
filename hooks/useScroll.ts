import { useState, useEffect } from "react";

export const useScroll = () => {
  const [pageYOffset, setPageYOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setPageYOffset(scrollY);
    };

    const handleCurrentScrollY = () => setPageYOffset(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    handleCurrentScrollY();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return {
    pageYOffset,
  };
};
