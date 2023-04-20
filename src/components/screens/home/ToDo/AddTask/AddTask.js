import { useState } from "react";
import { useDispatch } from "react-redux";

import { addToDo } from "@/store/toDoSlice";

const InputTask = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { target } = e;
    setTaskText(target.value);
  };

  const handleSubmit = (e) => {
    if (taskText) {
      dispatch(addToDo(taskText));
      setTaskText("");
    }
    e.preventDefault();
  };

  return (
    <div className="to-do__add-task add-task">
      <form action="#" onSubmit={handleSubmit}>
        <div className="to-do__item add-task__body">
          <span className="add-task__checkbox">
            <span></span>
          </span>
          <input
            className="add-task__text"
            type="text"
            placeholder="Add a task"
            value={taskText}
            onChange={handleChange}
          />
          <button
            className="add-task__action _icon-plus"
            type="submit"
          ></button>
        </div>
      </form>
    </div>
  );
};

export default InputTask;
