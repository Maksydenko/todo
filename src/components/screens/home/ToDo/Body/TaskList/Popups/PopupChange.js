import { useState } from "react";
import { useDispatch } from "react-redux";

import { changeToDo } from "@/store/toDoSlice";

import Popup from "@/components/base/Popup/Popup";

const PopupChange = ({ toDo }) => {
  const { id, text } = toDo;
  const [changedText, setChangedText] = useState(text);
  const dispatch = useDispatch();

  const editButton = <span className="to-do__action _icon-pencil"></span>;

  const handleChange = ({ target: { value: changedText } }) => {
    setChangedText(changedText);
    dispatch(changeToDo({ id, text: changedText }));
  };

  return (
    <Popup className="_input to-do" button={editButton}>
      <div className="task-list__popup-change">
        <span className="task-list__action _icon-pencil"></span>
        <input
          type="text"
          className="task-list__change-input"
          autoFocus
          value={changedText}
          onChange={handleChange}
        />
      </div>
    </Popup>
  );
};

export default PopupChange;
