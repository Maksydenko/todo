import { useState, useEffect } from "react";

export const useHideOnScroll = () => {
  const [isHidden, setIsHidden] = useState(true);

  const scrollActive = 110;
  const handleScrollTop = () => {
    if (window.scrollY >= scrollActive) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [isHidden]);

  return isHidden;
};
