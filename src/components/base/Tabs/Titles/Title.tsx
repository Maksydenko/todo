import { FC, Dispatch, SetStateAction } from "react";

import { getActiveClassName } from "@/utils/class.utils";

import { ITab } from "../tab.interface";

interface ITitleProps {
  tabsLength: number;
  tab: ITab;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Title: FC<ITitleProps> = ({
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
      className={getActiveClassName("tabs__title", activeTab === tab.id)}
      style={styleWidth}
      onClick={handleClick}
    >
      <span>{tab.title}</span>
    </li>
  );
};

export default Title;
