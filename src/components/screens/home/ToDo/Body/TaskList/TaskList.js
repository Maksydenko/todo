import Task from "./Task";

const TaskList = ({ toDos }) => {
  const toDoItems = toDos.map((toDo) => <Task key={toDo.id} toDo={toDo} />);

  return <ul className="to-do__task-list">{toDoItems}</ul>;
};

export default TaskList;
