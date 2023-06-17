import { FC, MouseEvent, ReactNode, useRef } from "react";

interface BodyProps {
  children: ReactNode;
  onClick(): void;
}

const Body: FC<BodyProps> = ({ children, onClick }) => {
  const popupBoxRef = useRef<HTMLDivElement>(null);

  // Handle click
  interface IHandleClick {
    ({ target }: MouseEvent<EventTarget>): false | void;
  }
  const handleClick: IHandleClick = ({ target }) => {
    if (!popupBoxRef.current?.contains(target as Node)) {
      onClick();
    }
  };

  return (
    <div className="popup__body" onClick={handleClick}>
      <div className="popup__content">
        <div className="popup__box" ref={popupBoxRef}>
          <button className="popup__cross" onClick={onClick}></button>
          <div className="popup__children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
