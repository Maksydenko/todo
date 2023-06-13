import { FC } from "react";

import { useScrollLock } from "@/hooks/useScrollLock";

import Body from "./Body";

interface PopupProps {
  className: string;
  children: JSX.Element;
  button: JSX.Element;
}

const Popup: FC<PopupProps> = ({ className, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();
  const handleClick = (): void => setIsScrollLocked(!isScrollLocked);

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handleClick}
      >
        {button}
      </button>
      {isScrollLocked && <Body onClick={handleClick}>{children}</Body>}
    </div>
  );
};

export default Popup;
