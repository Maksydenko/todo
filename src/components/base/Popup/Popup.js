import { useActivePopup } from "./useActivePopup";

import Body from "./Body";

const Popup = ({ className, button, children }) => {
  const { isActive, setIsActive } = useActivePopup();

  const handleActivePopup = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${className}__popup popup`}>
      <button
        className={`${className}__popup-button popup__button`}
        onClick={handleActivePopup}
      >
        {button}
      </button>
      {isActive && <Body onActivePopup={handleActivePopup}>{children}</Body>}
    </div>
  );
};

export default Popup;
