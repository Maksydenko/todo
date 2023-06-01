import { FC, Dispatch, SetStateAction } from "react";

import { getModifierClassName } from "@/utils/className.util";

import { ITab } from "../tab.interface";

interface TitleProps {
  tabsLength: number;
  tab: ITab;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Title: FC<TitleProps> = ({
  tabsLength,
  tab,
  activeTab,
  setActiveTab,
}) => {
  const tabWidth = 100 / tabsLength;
  const styleWidth = {
    width: `${tabWidth}%`,
  };
  const handleClick = (): void => setActiveTab(tab.id);

  return (
    <li
      className={getModifierClassName(activeTab === tab.id, "tabs__title")}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
