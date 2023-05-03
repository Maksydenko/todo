interface IGetModifierClassName {
  (isActive: boolean, className: string, modifier?: string): string;
}

export const getModifierClassName: IGetModifierClassName = (
  isActive,
  className,
  modifier = "active"
) => `${className}${isActive ? ` ${className}_${modifier}` : ""}`;
