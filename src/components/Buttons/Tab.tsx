import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import Svg, { Path } from "react-native-svg";
import { StyleSheet, View } from "react-native";
import { IconProp } from "@components/Icons/types";
import { RectButton } from "react-native-gesture-handler";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { CloseIcon, CurrencyExchangeIcon, ExpenseIcon, IncomeIcon } from "@components/Icons";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

interface FloatingButtonProps {
  color?: string;
  onPress?: Function;
  iconColor?: string;
  iconSize?: number;
  icon: React.ComponentType<IconProp>;
}

const styles = StyleSheet.create({
  container: {
    width: 80,
    alignItems: "center",
  },
  button: {
    top: -6,
    width: 50,
    height: 50,
    borderRadius: 50,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors["violet-100"],
  },
  floating: {
    width: 180,
    bottom: 25,
    height: 180,
    position: "absolute",
    alignItems: "center",
    justifyContent: "space-between",
  },
  floatingButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});

const Background = () => {
  return (
    <Svg width="95" height="85" viewBox="0 0 80 70" style={{ position: "absolute", top: -1 }}>
      <Path
        d="M68 16C68 31.464 55.464 44 40 44C24.536 44 12 31.464 12 16C12 13.0605 12.453 10.2268 13.2929 7.56487C13.7419 6.81497 14 5.93762 14 5C14 2.60861 12.3212 0.60934 10.0778 0.116465C10.0848 0.0774849 10.0922 0.0386614 10.1 0H9H0V70H80V0H71H69.9C69.9078 0.0386617 69.9152 0.0774853 69.9222 0.116465C67.6788 0.609342 66 2.60862 66 5C66 5.93762 66.2581 6.81496 66.7071 7.56486C67.547 10.2268 68 13.0605 68 16Z"
        fill={colors["light-80"]}
      />
    </Svg>
  );
};

const FloatingButton: React.FC<FloatingButtonProps> = ({ color, icon: Icon, iconColor = "#FFFFFF", iconSize, onPress }) => {
  return (
    <RectButton style={[styles.floatingButton, { backgroundColor: color }]} onPress={() => onPress?.()}>
      <Icon fill={iconColor} size={iconSize} />
    </RectButton>
  );
};

export default function TabBarButton(props: BottomTabBarButtonProps) {
  const rotate = useSharedValue(45);
  const opacity = useSharedValue(0);
  const [open, setOpen] = React.useState(false);

  const handlePress = () => {
    if (open) {
      setOpen(false);
      rotate.value = withTiming(0);
      opacity.value = withTiming(1);
    } else {
      setOpen(true);
      rotate.value = withTiming(45);
      opacity.value = withTiming(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `-${rotate.value}deg` }],
    };
  });

  const floatingStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ translateY: interpolate(opacity.value, [0, 1], [10, 0]) }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.floating, floatingStyle]}>
        <FloatingButton icon={CurrencyExchangeIcon} color={colors["blue-100"]} iconSize={30} />
        <Box flexDirection="row" width={180} justifyContent="space-between">
          <FloatingButton icon={IncomeIcon} color={colors["green-100"]} iconSize={30} />
          <FloatingButton icon={ExpenseIcon} color={colors["red-100"]} iconSize={30} />
        </Box>
        <Box width={50} height={50} />
      </Animated.View>
      <Background />
      <RectButton {...props} style={styles.button} onPress={handlePress}>
        <Animated.View style={animatedStyle}>
          <CloseIcon size={32} fill="#FFFFFF" />
        </Animated.View>
      </RectButton>
    </View>
  );
}
