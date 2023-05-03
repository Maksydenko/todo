import { FC } from "react";

import { useHideOnScroll } from "./useHideOnScroll";

const ScrollTop: FC = () => {
  interface IGetHiddenClassName {
    (className: string): string;
  }
  const getHiddenClassName: IGetHiddenClassName = (className) =>
    `${className}${isHidden ? " _hidden" : ""}`;

  const isHidden: boolean = useHideOnScroll();
  const handleClick = (): void =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <span
      className={getHiddenClassName("header__scroll-top")}
      onClick={handleClick}
    >
      <span className="header__arrow-top _icon-arrow-top"></span>
    </span>
  );
};

export default ScrollTop;
