import { FC } from "react";

import { ITab } from "../tab.interface";

interface IContentProps {
  tab: ITab;
  activeTab: number;
}

const Content: FC<IContentProps> = ({ tab, activeTab }) =>
  activeTab === tab.id ? (
    <div className="tabs__content">{tab.content}</div>
  ) : null;

export default Content;
