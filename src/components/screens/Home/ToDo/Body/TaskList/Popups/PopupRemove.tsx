import { FC } from "react";
import { useDispatch } from "react-redux";

import { removeToDo } from "@/provider/toDo/toDoSlice";

import Popup from "@/components/base/Popup/Popup";

import { IToDo } from "@/interfaces/toDo.interface";

interface PopupRemoveProps {
  toDo: IToDo;
}

const PopupRemove: FC<PopupRemoveProps> = ({ toDo }) => {
  const dispatch = useDispatch();
  const removeButton = <span className="to-do__action _icon-bin"></span>;

  return (
    <Popup className="to-do" button={removeButton}>
      <div className="task-list__popup-remove">
        <p className="to-do__warning-text task-list__warning-text">
          «{toDo.text}»‎ will be permanently removed!
        </p>
        <button
          className="to-do__remove-button to-do__remove-button_transparent-bg task-list__remove-button"
          onClick={() => dispatch(removeToDo(toDo.id))}
        >
          Remove task
        </button>
      </div>
    </Popup>
  );
};

export default PopupRemove;
