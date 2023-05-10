import { Dispatch, SetStateAction, useState, useEffect } from "react";

interface IUseLockScroll {
  (): {
    isLockedScroll: boolean;
    setIsLockedScroll: Dispatch<SetStateAction<boolean>>;
  };
}

export const useLockScroll: IUseLockScroll = () => {
  const [isLockedScroll, setIsLockedScroll] = useState(false);

  useEffect(() => {
    const body: HTMLElement = document.body;

    if (isLockedScroll) {
      body.classList.add("lock");
    } else {
      body.classList.remove("lock");
    }

    return () => {
      body.classList.remove("lock");
    };
  }, [isLockedScroll]);

  return {
    isLockedScroll,
    setIsLockedScroll,
  };
};
