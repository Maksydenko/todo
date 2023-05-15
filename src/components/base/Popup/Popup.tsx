import { FC } from "react";

import { useLockScroll } from "@/hooks/useLockScroll";

import Body from "./Body";

interface IPopupProps {
  className: string;
  children: JSX.Element;
  button: JSX.Element;
}

const Popup: FC<IPopupProps> = ({ className, children, button }) => {
  const { isLockedScroll, setIsLockedScroll } = useLockScroll();
  const handleClick = (): void => setIsLockedScroll(!isLockedScroll);

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handleClick}
      >
        {button}
      </button>
      {isLockedScroll && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
