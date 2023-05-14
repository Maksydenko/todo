import { FC } from "react";
import { useDispatch } from "react-redux";

import { completeToDo } from "@/provider/toDo/toDoSlice";

import { IToDo } from "@/interfaces/toDo.interface";

interface ICheckboxProps {
  toDo: IToDo;
}

const Checkbox: FC<ICheckboxProps> = ({ toDo }) => {
  const dispatch = useDispatch();

  return (
    <label className="to-do__checkbox task-list__checkbox">
      <input
        type="checkbox"
        checked={toDo.completed}
        onChange={() => dispatch(completeToDo(toDo.id))}
      />
      <span></span>
    </label>
  );
};

export default Checkbox;
