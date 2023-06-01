import { FC, ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { changeToDo } from "@/provider/toDo/toDoSlice";

import Popup from "@/components/base/Popup/Popup";

import { IToDo } from "@/interfaces/toDo.interface";

interface PopupChangeProps {
  toDo: IToDo;
}

const PopupChange: FC<PopupChangeProps> = ({ toDo }) => {
  const { id, text } = toDo;
  const [changedText, setChangedText] = useState(text);
  const dispatch = useDispatch();

  const editButton = <span className="to-do__action _icon-pencil"></span>;

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value: changedText } }) => {
    setChangedText(changedText);
    dispatch(changeToDo({ id, text: changedText }));
  };

  return (
    <Popup className="to-do" button={editButton}>
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
