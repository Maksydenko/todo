import { FC } from "react";

import { ITab } from "../tab.interface";

interface ContentProps {
  tab: ITab;
  activeTab: number;
}

const Content: FC<ContentProps> = ({ tab: { id, content }, activeTab }) => {
  const isActive = activeTab === id;

  return isActive ? <div className="tabs__content">{content}</div> : null;
};
export default Content;
