import { useState } from "react";
import { useDispatch } from "react-redux";

import { changeToDo } from "@/store/toDoSlice";

import Popup from "@/components/base/Popup/Popup";

const PopupChange = ({ toDo }) => {
  const { id, text } = toDo;
  const [changedText, setChangedText] = useState(text);
  const dispatch = useDispatch();

  const editButton = <span className="to-do__action _icon-pencil"></span>;

  const handleChange = (e) => {
    const {
      target: { value: changedText },
    } = e;
    setChangedText(changedText);
    dispatch(changeToDo({ id, text: changedText }));
  };

  return (
    <Popup className="_input to-do" button={editButton}>
      <div className="to-do__popup-change">
        <span className="to-do__pencil _icon-pencil"></span>
        <input
          type="text"
          className="to-do__change-input"
          autoFocus
          value={changedText}
          onChange={handleChange}
        />
      </div>
    </Popup>
  );
};

export default PopupChange;
