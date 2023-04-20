import AddTask from "./AddTask/AddTask";
import PopupClear from "./Body/PopupClear";
import TabsTaskList from "./Body/TabsTaskList";

const ToDo = () => {
  return (
    <section className="to-do">
      <div className="to-do__container">
        <AddTask />
        <div className="to-do__body">
          <TabsTaskList />
          <PopupClear />
        </div>
      </div>
    </section>
  );
};

export default ToDo;
