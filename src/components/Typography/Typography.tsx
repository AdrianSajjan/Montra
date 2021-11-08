import * as React from "react";
import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import typography from "@theme/typography";
import colors from "@theme/colors";

interface Props extends TextProps {
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  color?: keyof typeof colors;
  variant?: keyof typeof typography;
  textAlign?: "center" | "left" | "right" | "justify";
}

export default function Typography({ children, textAlign = "left", color = "dark-50", variant = "regular-1", style, ...rest }: Props) {
  return (
    <Text style={[typography[variant], { color: colors[color], textAlign }, style]} {...rest}>
      {children}
    </Text>
  );
}
