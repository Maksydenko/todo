import { useHideOnScroll } from "./useHideOnScroll";

const ScrollTop = () => {
  const hidden = useHideOnScroll();
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <spanuseHideOnScroll
      className={`header__scroll-top${hidden ? " _hidden" : ""}`}
      type="button"
      onClick={handleClick}
    >
      <span className="header__arrow-top _icon-arrow-top"></span>
    </spanuseHideOnScroll>
  );
};

export default ScrollTop;
