import { FC, ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";

import { addToDo } from "@/provider/toDoSlice";

const InputTask: FC = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  // Handle change
  interface IHandleChange {
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void;
  }
  const handleChange: IHandleChange = ({ target: { value } }) =>
    setTaskText(value);

  // Handle submit
  interface IHandleSubmit {
    (e: FormEvent<HTMLFormElement>): void;
  }
  const handleSubmit: IHandleSubmit = (e) => {
    if (taskText) {
      dispatch(addToDo(taskText));
      setTaskText("");
    }
    e.preventDefault();
  };

  return (
    <div className="to-do__add-task add-task">
      <form
        action="#"
        className="to-do__item add-task__body"
        onSubmit={handleSubmit}
      >
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
        <button className="add-task__action _icon-plus" type="submit"></button>
      </form>
    </div>
  );
};

export default InputTask;
