import * as React from "react";

export interface IconProps {
  size?: number;
  fill?: string;
}

export interface ButtonProps {
  title?: string;
  iconFill?: string;
  iconSize?: number;
  onPress?: () => void;
  icon?: React.FC<IconProps>;
}
