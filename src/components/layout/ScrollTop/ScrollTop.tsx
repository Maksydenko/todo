import { FC } from "react";

import { useActiveOnScroll } from "./useActiveOnScroll";

import { handleClassName } from "@/utils/className.util";

const ScrollTop: FC = () => {
  const isActive = useActiveOnScroll();

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const modifiedClassName = handleClassName(isActive, "scroll-top");

  return (
    <button className={modifiedClassName} onClick={handleClick}>
      <span className="arrow-top _icon-arrow-top"></span>
    </button>
  );
};

export default ScrollTop;
