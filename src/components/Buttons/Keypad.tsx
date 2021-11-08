import colors from "@theme/colors";
import React from "react";
import { Text, Pressable, useWindowDimensions, StyleSheet } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 48,
    lineHeight: 60,
    color: colors["light-80"],
    fontFamily: "Inter-Medium",
  },
});

interface Props {
  text?: string;
  icon?: React.ReactNode;
  onPress?: (value: string) => void | React.Dispatch<React.SetStateAction<string>>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function Keypad({ icon: Icon, text, onPress }: Props) {
  const { width } = useWindowDimensions();

  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      width: width / 3,
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.7, { duration: 100, easing: Easing.ease });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100, easing: Easing.ease });
  };

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.button, style]}
      onPress={() => onPress?.(text || "")}
    >
      {text && <Text style={styles.text}>{text}</Text>}
      {Icon}
    </AnimatedPressable>
  );
}
