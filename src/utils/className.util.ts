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
  noNamespace = false
) =>
  `${className}${
    isActive ? ` ${noNamespace ? "" : className}_${modifier}` : ""
  }`;
