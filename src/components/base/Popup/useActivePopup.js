import { useEffect, useState } from "react";

export const useActivePopup = () => {
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    const body = document.body;

    if (isActive) {
      body.classList.add("_lock");
    } else {
      body.classList.remove("_lock");
    }

    return () => {
      body.classList.remove("_lock");
    };
  }, [isActive]);

  return { isActive, setIsActive };
};
