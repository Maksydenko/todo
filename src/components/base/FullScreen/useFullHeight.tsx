import { useState } from "react";

import { useWindowResize } from "@/hooks/useWindowResize";

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
  useWindowResize(handleHeightUpdate);

  return height;
};
