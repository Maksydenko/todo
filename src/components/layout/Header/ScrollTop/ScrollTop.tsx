import { FC } from "react";

import { useHideOnScroll } from "./useHideOnScroll";

import { getModifierClassName } from "@/utils/className.util";

const ScrollTop: FC = () => {
  const isHidden: boolean = useHideOnScroll();
  const handleClick = (): void =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <span
      className={getModifierClassName(
        isHidden,
        "header__scroll-top",
        "hidden",
        true
      )}
      onClick={handleClick}
    >
      <span className="header__arrow-top _icon-arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
