import { useDispatch, useSelector } from "react-redux";

import { clearToDos, selectToDos } from "@/store/toDoSlice";

import Popup from "@/components/base/Popup/Popup";

const PopupClear = () => {
  const toDos = useSelector(selectToDos);
  const dispatch = useDispatch();

  const textButton = `Clear tasks (${toDos.length})`;

  const clearButton = (
    <span className="to-do__remove-button">{textButton}</span>
  );

  if (toDos.length) {
    return (
      <Popup className="to-do" button={clearButton}>
        <div className="to-do__popup-clear">
          <p className="to-do__warning-text">
            All tasks will be permanently removed!
          </p>
          <button
            className="to-do__remove-button to-do__remove-button_transparent-bg"
            onClick={() => dispatch(clearToDos())}
          >
            {textButton}
          </button>
        </div>
      </Popup>
    );
  }
};

export default PopupClear;
