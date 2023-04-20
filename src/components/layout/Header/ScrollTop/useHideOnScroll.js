import { useState, useEffect } from "react";

export const useHideOnScroll = () => {
  const [hidden, setHidden] = useState(true);

  const scrollActive = 110;
  const handleScrollTop = () => {
    if (window.scrollY >= scrollActive) {
      setHidden(false);
    } else {
      setHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [hidden]);

  return hidden;
};
