import { FC, Dispatch, SetStateAction } from "react";

import Title from "./Title";

import { ITab } from "../../../../interfaces/tab.interface";

interface TitlesProps {
  tabs: ITab[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Titles: FC<TitlesProps> = ({ tabs, activeTab, setActiveTab }) => {
  const titleItems = tabs.map((tab) => {
    const { id } = tab;
    const { length } = tabs;

    return (
      <Title
        key={id}
        tabsLength={length}
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    );
  });

  return <ul className="tabs__titles">{titleItems}</ul>;
};

export default Titles;
