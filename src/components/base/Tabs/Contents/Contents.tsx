import { FC } from "react";

import Content from "./Content";

import { ITab } from "../tab.interface";

interface ContentsProps {
  tabs: ITab[];
  activeTab: number;
}

const Contents: FC<ContentsProps> = ({ tabs, activeTab }) => {
  const contentItems = tabs.map((tab) => {
    const { id, content } = tab;
    const isActive = activeTab === id;

    if (isActive) {
      return <Content key={id} content={content} />;
    }
    return null;
  });

  return <div className="tabs__contents">{contentItems}</div>;
};

export default Contents;
