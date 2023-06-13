import { useEffect } from "react";

interface IUseWindowResize {
  (handler: () => void): void;
}

export const useWindowResize: IUseWindowResize = (handler) => {
  useEffect(() => {
    handler();
    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    };
  }, [handler]);
};
