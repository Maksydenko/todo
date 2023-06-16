import { useState, useEffect } from "react";

interface IUseActiveOnScroll {
  (): boolean;
}

export const useActiveOnScroll: IUseActiveOnScroll = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollActive = 110;

  // Handle active
  interface IHandleActive {
    (): void;
  }
  const handleActive: IHandleActive = () =>
    window.scrollY >= scrollActive ? setIsActive(true) : setIsActive(false);

  useEffect(() => {
    window.addEventListener("scroll", handleActive);

    return () => {
      window.removeEventListener("scroll", handleActive);
    };
  }, [isActive]);

  return isActive;
};
