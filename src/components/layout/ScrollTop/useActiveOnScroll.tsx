import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseActiveOnScroll {
  (): boolean;
}

export const useActiveOnScroll: IUseActiveOnScroll = () => {
  const [isActive, setIsActive] = useState(false);
  const breakpoint = 110;

  // Handle active
  interface IHandleActive {
    (): void;
  }
  const handleActive: IHandleActive = () => {
    const isBehindBreakpoint = window.scrollY >= breakpoint;

    if (isBehindBreakpoint) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };
  useWindowListener(handleActive, "scroll");

  return isActive;
};
