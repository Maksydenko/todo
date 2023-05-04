import { FC, MouseEvent, useRef } from "react";

interface IBodyProps {
  children: JSX.Element;
  onClick(): void;
}

const Body: FC<IBodyProps> = ({ children, onClick }) => {
  const popupBoxRef = useRef<HTMLDivElement>(null);

  // Handle click
  interface IHandleClick {
    ({ target }: MouseEvent<EventTarget>): false | void;
  }
  const handleClick: IHandleClick = ({ target }) =>
    !popupBoxRef.current?.contains(target as Node) && onClick();

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
