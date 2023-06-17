import { FC } from "react";

import Content from "./Content";

import { ITab } from "../tab.interface";

interface ContentsProps {
  tabs: ITab[];
  activeTab: number;
}

const Contents: FC<ContentsProps> = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => {
    const isActive = activeTab === tab.id;

    if (isActive) {
      return <Content key={tab.id} content={tab.content} />;
    }
    return null;
  });

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
