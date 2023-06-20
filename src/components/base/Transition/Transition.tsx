import { FC } from "react";
import { CSSTransition } from "react-transition-group";

import { handleClassName } from "@/utils/className.util";

interface TransitionProps {
  condition: boolean;
  className: string;
  modifier?: string;
  children: JSX.Element | JSX.Element[];
  timeout?: number;
  unmountOnExit?: boolean;
}

const Transition: FC<TransitionProps> = ({
  condition,
  className,
  modifier,
  timeout = 300,
  unmountOnExit = true,
  children,
}) => {
  const modifiedClassName = handleClassName(
    !!modifier,
    `${className}__alert`,
    modifier
  );

  return (
    <CSSTransition
      in={condition}
      classNames={`${modifiedClassName} alert`}
      timeout={timeout}
      unmountOnExit={unmountOnExit}
    >
      {children}
    </CSSTransition>
  );
};

export default Transition;
