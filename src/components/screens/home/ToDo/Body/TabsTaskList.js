import { useSelector } from "react-redux";

import {
  selectCompletedToDos,
  selectToDos,
  selectUncompletedToDos,
} from "@/store/toDoSlice";

import Tabs from "@/components/base/Tabs/Tabs";
import TaskList from "./TaskList/TaskList";

const TabsTaskList = () => {
  const allToDos = useSelector(selectToDos);
  const completedToDos = useSelector(selectCompletedToDos);
  const uncompletedToDos = useSelector(selectUncompletedToDos);

  const numberAllTasks = allToDos.length;

  const tabs = [
    {
      id: 1,
      title: `All (${numberAllTasks})`,
      content: <TaskList toDos={allToDos} />,
    },
    {
      id: 2,
      title: `Completed (${completedToDos.length}/${numberAllTasks})`,
      content: <TaskList toDos={completedToDos} />,
    },
    {
      id: 3,
      title: `Uncompleted (${uncompletedToDos.length}/${numberAllTasks})`,
      content: <TaskList toDos={uncompletedToDos} />,
    },
  ];

  return <Tabs className="to-do" tabs={tabs} />;
};

export default TabsTaskList;
