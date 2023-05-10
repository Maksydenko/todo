import { useState, useEffect } from "react";

export const useHideOnScroll = (): boolean => {
  const [isHidden, setIsHidden] = useState(true);

  const scrollActive = 110;
  const handleScrollTop = (): void =>
    window.scrollY >= scrollActive ? setIsHidden(false) : setIsHidden(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);

    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [isHidden]);

  return isHidden;
};
