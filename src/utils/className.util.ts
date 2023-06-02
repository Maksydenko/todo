interface IHandleClassName {
  (
    isActive: boolean,
    className: string,
    modifier?: string,
    noNamespace?: boolean
  ): string;
}

export const handleClassName: IHandleClassName = (
  isActive,
  className,
  modifier = "active",
  noNamespace
) =>
  `${className}${
    isActive ? ` ${noNamespace ? "" : className}_${modifier}` : ""
  }`;
