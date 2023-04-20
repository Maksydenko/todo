import Checkbox from "./Checkbox";
import PopupChange from "./Popups/PopupChange";
import PopupRemove from "./Popups/PopupRemove";

const Task = ({ toDo }) => (
  <li
    key={toDo.id}
    className={`to-do__item to-do__item${
      toDo.completed ? " to-do__item_completed" : ""
    }`}
  >
    <Checkbox toDo={toDo} />
    <p className="to-do__text">{toDo.text}</p>
    <PopupChange toDo={toDo} />
    <PopupRemove toDo={toDo} />
  </li>
);

export default Task;
