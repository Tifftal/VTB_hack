import { FC } from "react";
import cn from "classnames";

import { TextProps } from "../../app.typing";
import "./P.scss";

export const P: FC<TextProps> = (props) => {
  const { sx, children, variant, className } = props;

  return (
    <p
      className={cn("text_root", className && className, {
        "text_small_variant": variant === "sm",
        "text_middle_variant": variant === "md",
        "text_large_variant": variant === "lg",
      })}
      style={sx}
    >
      {children}
    </p>
  );
};
