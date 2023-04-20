import Title from "./Title";

const Titles = ({ tabs, isActive, setIsActive }) => {
  const tabsWidth = `${100 / tabs.length}%`;

  const tabItems = tabs.map((tab) => (
    <Title
      key={tab.id}
      tab={tab}
      tabsWidth={tabsWidth}
      isActive={isActive}
      setIsActive={setIsActive}
    />
  ));

  return <ul className="tabs__titles">{tabItems}</ul>;
};

export default Titles;
