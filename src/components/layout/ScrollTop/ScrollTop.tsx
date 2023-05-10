import { FC } from "react";

import { useHideOnScroll } from "./useHideOnScroll";

import { getModifierClassName } from "@/utils/className.util";

const ScrollTop: FC = () => {
  const isHidden: boolean = useHideOnScroll();
  const handleClick = (): void =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div
      className={getModifierClassName(isHidden, "scroll-top", "hidden", true)}
      onClick={handleClick}
    >
      <span className="arrow-top _icon-arrow-top"></span>
    </div>
  );
};

export default ScrollTop;
