import { useState } from "react";

import { useWindowListener } from "@/hooks/useWindowListener";

interface IUseFullHeight {
  (): string;
}

export const useFullHeight: IUseFullHeight = () => {
  const [height, setHeight] = useState("100vh");

  // Handle height update
  interface IHandleResizeUpdate {
    (): void;
  }
  const handleHeightUpdate: IHandleResizeUpdate = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowListener(handleHeightUpdate);

  return height;
};
