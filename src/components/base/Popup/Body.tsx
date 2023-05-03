import { FC, MouseEvent } from "react";

interface IBodyProps {
  children: JSX.Element;
  onClick(): void;
}

const Body: FC<IBodyProps> = ({ children, onClick }) => {
  const handleClick = ({ target }: MouseEvent<EventTarget>): false | void =>
    !(target as Element).closest(".popup__box") && onClick();

  return (
    <div className="popup__body" onClick={handleClick}>
      <div className="popup__content">
        <div className="popup__box">
          <button className="popup__cross" onClick={onClick}></button>
          <div className="popup__children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
