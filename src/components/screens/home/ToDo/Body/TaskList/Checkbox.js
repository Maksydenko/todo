import { useDispatch } from "react-redux";

import { completeToDo } from "@/store/toDoSlice";

const Checkbox = ({ toDo }) => {
  const dispatch = useDispatch();

  return (
    <label className="to-do__checkbox">
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
