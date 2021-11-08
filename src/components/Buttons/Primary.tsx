import * as React from "react";
import colors from "@theme/colors";
import typography from "@theme/typography";
import { Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface Props {
  title?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: colors["violet-100"],
  },
  text: {
    ...typography["title-3"],
    color: colors["light-80"],
  },
});

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function PrimaryButton({ icon: Icon, onPress, title }: Props) {
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.9, { duration: 100, easing: Easing.ease });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100, easing: Easing.ease });
  };

  const marginLeft = Icon ? 12 : 0;

  return (
    <AnimatedPressable onPressIn={handlePressIn} onPress={onPress} onPressOut={handlePressOut} style={[style, styles.button]}>
      {Icon}
      <Text style={[styles.text, { marginLeft }]}>{title}</Text>
    </AnimatedPressable>
  );
}
