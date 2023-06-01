import { FC, Dispatch, SetStateAction } from "react";

import Title from "./Title";

import { ITab } from "../tab.interface";

interface TitlesProps {
  tabs: ITab[];
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Titles: FC<TitlesProps> = ({ tabs, activeTab, setActiveTab }) => (
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
