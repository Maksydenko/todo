import Content from "./Content";

const Contents = ({ tabs, isActive }) => {
  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} tab={tab} isActive={isActive} />
  ));

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
