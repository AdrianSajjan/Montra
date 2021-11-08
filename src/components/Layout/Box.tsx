import * as React from "react";
import { View, ViewStyle } from "react-native";

interface Props extends ViewStyle {
  children?: React.ReactNode;
}

export default function Box({ children, ...rest }: Props) {
  return <View style={{ ...rest }}>{children}</View>;
}
