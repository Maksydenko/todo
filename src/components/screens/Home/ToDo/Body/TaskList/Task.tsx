import { FC } from "react";

import { IToDo } from "@/interfaces/toDo.interface";

import Checkbox from "./Checkbox";
import PopupChange from "./Popups/PopupChange";
import PopupRemove from "./Popups/PopupRemove";

interface TaskProps {
  toDo: IToDo;
}

const Task: FC<TaskProps> = ({ toDo }) => (
  <li
    key={toDo.id}
    className={`to-do__item task-list__item${
      toDo.completed ? " task-list__item_completed" : ""
    }`}
  >
    <Checkbox toDo={toDo} />
    <p className="task-list__text">{toDo.text}</p>
    <PopupChange toDo={toDo} />
    <PopupRemove toDo={toDo} />
  </li>
);

export default Task;
