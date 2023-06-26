import { FC } from "react";

import { ITab } from "../tab.interface";

interface ContentProps {
  content: ITab["content"];
}

const Content: FC<ContentProps> = ({ content }) => {
  return <div className="tabs__content">{content}</div>;
};
export default Content;
