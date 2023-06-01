interface IGetModifierClassName {
  (
    isActive: boolean,
    className: string,
    modifier?: string,
    noNamespace?: boolean
  ): string;
}

export const getModifierClassName: IGetModifierClassName = (
  isActive,
  className,
  modifier = "active",
  noNamespace
) =>
  `${className}${
    isActive ? ` ${noNamespace ? "" : className}_${modifier}` : ""
  }`;
