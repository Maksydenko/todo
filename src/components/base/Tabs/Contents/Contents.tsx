import { FC } from "react";

import Content from "./Content";

import { ITab } from "../tab.interface";

interface IContentsProps {
  tabs: ITab[];
  activeTab: number;
}

const Contents: FC<IContentsProps> = ({ tabs, activeTab }) => (
  <div className="tabs__contents">
    {tabs.map((tab) => (
      <Content key={tab.id} tab={tab} activeTab={activeTab} />
    ))}
  </div>
);

export default Contents;
