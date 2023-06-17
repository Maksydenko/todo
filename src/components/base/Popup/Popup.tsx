import { FC, ReactNode } from "react";

import Transition from "@/components/base//Transition/Transition";
import Body from "./Body";

import { useScrollLock } from "@/hooks/useScrollLock";

import { handleClassName } from "@/utils/className.util";

interface PopupProps {
  className: string;
  modifier?: string;
  children: ReactNode;
  button: ReactNode;
}

const Popup: FC<PopupProps> = ({ className, modifier, children, button }) => {
  const { isScrollLocked, setIsScrollLocked } = useScrollLock();

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => setIsScrollLocked(!isScrollLocked);

  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__popup`,
    modifier
  );

  return (
    <div className={`${modifiedClassName} popup`}>
      <button className="popup__button" onClick={handleClick}>
        {button}
      </button>
      <Transition condition={isScrollLocked} className="popup">
        <Body onClick={handleClick}>{children}</Body>
      </Transition>
    </div>
  );
};

export default Popup;
