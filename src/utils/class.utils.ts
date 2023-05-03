interface IGetActiveClassName {
  (className: string, isActive: boolean): string;
}

export const getActiveClassName: IGetActiveClassName = (className, isActive) =>
  `${className}${isActive ? ` ${className}_active` : ""}`;
