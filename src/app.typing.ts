import { CSSProperties, DetailedHTMLProps, HTMLAttributes, SVGProps } from "react";

export type IconType = SVGProps<SVGSVGElement>;

export type textSize = "sm" | "md" | "lg";

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  variant: textSize;
  sx?: CSSProperties;
}