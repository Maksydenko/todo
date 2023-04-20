const Body = ({ onActivePopup, children }) => {
  const handleClosePopup = (e) => {
    const { target } = e;
    if (!target.closest(".popup__box")) {
      onActivePopup();
    }
  };

  return (
    <div className="popup__body" onClick={handleClosePopup}>
      <div className="popup__content">
        <div className="popup__box">
          <button className="popup__cross" onClick={onActivePopup}></button>
          <div className="popup__children">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
