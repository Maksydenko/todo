import { FC } from "react";

import { IToDo } from "@/interfaces/toDo.interface";

import Task from "./Task";

interface ITaskListProps {
  toDos: IToDo[];
}

const TaskList: FC<ITaskListProps> = ({ toDos }) => (
  <ul className="to-do__task-list task-list">
    {toDos.map((toDo) => (
      <Task key={toDo.id} toDo={toDo} />
    ))}
  </ul>
);

export default TaskList;
