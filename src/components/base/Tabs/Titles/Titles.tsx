import { FC, Dispatch, SetStateAction } from "react";

import Title from "./Title";

import { ITab } from "../tab.interface";

interface ITitlesProps {
  tabs: ITab[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Titles: FC<ITitlesProps> = ({ tabs, activeTab, setActiveTab }) => (
  <ul className="tabs__titles">
    {tabs.map((tab) => (
      <Title
        key={tab.id}
        tabsLength={tabs.length}
        tab={tab}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    ))}
  </ul>
);

export default Titles;
