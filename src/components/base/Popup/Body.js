const Body = ({ children, onClick }) => {
  const handleClick = ({ target }) =>
    !target.closest(".popup__box") && onClick();

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
