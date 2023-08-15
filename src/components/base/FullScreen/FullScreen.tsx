import { FC, ReactNode } from "react";

import { handleClassName } from "@/utils/className.util";

interface FullScreenProps {
  className: string;
  modifier?: string;
  children?: ReactNode;
  background?: ReactNode;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  modifier,
  children,
  background,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__full-screen`,
    modifier
  );

  return (
    <div className={`${modifiedClassName} full-screen`}>
      <div className="full-screen__body">{children}</div>
      {background}
    </div>
  );
};

export default FullScreen;
