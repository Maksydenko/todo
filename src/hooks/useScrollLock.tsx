import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface IUseScrollLock {
  (): {
    isScrollLocked: boolean;
    setIsScrollLocked: Dispatch<SetStateAction<boolean>>;
  };
}

export const useScrollLock: IUseScrollLock = () => {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  useEffect(() => {
    const body: HTMLElement = document.body;

    if (isScrollLocked) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }

    return () => {
      body.classList.remove("lock");
    };
  }, [isScrollLocked]);

  return {
    isScrollLocked,
    setIsScrollLocked,
  };
};
