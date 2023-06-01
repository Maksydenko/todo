import { useEffect } from "react";

interface IUseWindowSize {
  (handler: () => void): void;
}

export const useWindowSize: IUseWindowSize = (handler) => {
  useEffect(() => {
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, []);
};
