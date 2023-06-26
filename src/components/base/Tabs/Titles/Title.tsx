import { FC, Dispatch, SetStateAction } from "react";

import { handleClassName } from "@/utils/className.util";

import { ITab } from "../../../../interfaces/tab.interface";

interface TitleProps {
  tabsLength: number;
  tab: ITab;
  activeTab: number;
  setActiveTab: Dispatch<SetStateAction<number>>;
}

const Title: FC<TitleProps> = ({
  tabsLength,
  tab: { id, title },
  activeTab,
  setActiveTab,
}) => {
  const isActive = activeTab === id;
  const tabWidth = 100 / tabsLength;

  // Handle click
  interface IHandleClick {
    (): void;
  }
  const handleClick: IHandleClick = () => {
    setActiveTab(id);
  };

  const modifiedClassName = handleClassName(isActive, "tabs__title");

  const style = {
    width: `${tabWidth}%`,
  };

  return (
    <li className={modifiedClassName} style={style} onClick={handleClick}>
      <span>{title}</span>
    </li>
  );
};

export default Title;
