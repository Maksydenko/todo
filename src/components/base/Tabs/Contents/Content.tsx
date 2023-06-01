import { FC } from "react";

import { ITab } from "../tab.interface";

interface ContentProps {
  tab: ITab;
  activeTab: number;
}

const Content: FC<ContentProps> = ({ tab, activeTab }) =>
  activeTab === tab.id ? (
    <div className="tabs__content">{tab.content}</div>
  ) : null;

export default Content;
