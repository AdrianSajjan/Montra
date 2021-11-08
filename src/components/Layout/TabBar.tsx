import * as React from "react";
import { View } from "react-native";
import { BottomTabBar, BottomTabBarProps } from "@react-navigation/bottom-tabs";

export default function TabBar(props: BottomTabBarProps) {
  return (
    <View>
      <BottomTabBar {...props} />
    </View>
  );
}
