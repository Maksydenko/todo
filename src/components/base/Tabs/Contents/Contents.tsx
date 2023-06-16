import { FC } from "react";

import Content from "./Content";

import { ITab } from "../tab.interface";

interface ContentsProps {
  tabs: ITab[];
  activeTab: number;
}

const Contents: FC<ContentsProps> = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => (
    <Content key={tab.id} tab={tab} activeTab={activeTab} />
  ));

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
