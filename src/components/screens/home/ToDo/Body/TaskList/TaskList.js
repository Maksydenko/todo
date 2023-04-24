import Task from "./Task";

const TaskList = ({ toDos }) => (
  <ul className="to-do__task-list task-list">
    {toDos.map((toDo) => (
      <Task key={toDo.id} toDo={toDo} />
    ))}
  </ul>
);

export default TaskList;
