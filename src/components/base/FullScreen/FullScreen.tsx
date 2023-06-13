import { FC, useState } from "react";

import { useWindowResize } from "@/hooks/useWindowResize";

interface FullScreenProps {
  className: string;
  children?: JSX.Element;
  background?: JSX.Element;
}

const FullScreen: FC<FullScreenProps> = ({
  className,
  children,
  background,
}) => {
  const [height, setHeight] = useState("100vh");

  const handleResizeHeight = () => {
    const windowHeight = window.innerHeight;
    setHeight(`${windowHeight}px`);
  };
  useWindowResize(handleResizeHeight);

  const styleMinHeight = {
    minHeight: height,
  };

  return (
    <section className={`${className} full-screen`} style={styleMinHeight}>
      <div className="full-screen__body">{children}</div>
      {background}
    </section>
  );
};

export default FullScreen;
