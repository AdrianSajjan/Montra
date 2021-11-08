import * as React from "react";
import colors from "@theme/colors";
import Svg, { Path } from "react-native-svg";
import { CloseIcon, CurrencyExchangeIcon, ExpenseIcon, IncomeIcon } from "@components/Icons";
import { Pressable, StyleSheet, View } from "react-native";
import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import { TouchableOpacity } from "react-native-gesture-handler";

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

export default function TabBarButton(props: BottomTabBarButtonProps) {
  const rotate = useSharedValue(45);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      rotate.value = withTiming(0);
    } else {
      rotate.value = withTiming(45);
    }
  }, [open]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `-${rotate.value}deg` }],
    };
  });

  return (
    <View style={styles.container}>
      <Background />
      <Pressable {...props} style={styles.button} onPress={() => setOpen(!open)}>
        <Animated.View style={animatedStyle}>
          <CloseIcon size={32} fill={colors["light-100"]} />
        </Animated.View>
      </Pressable>
      <TouchableOpacity containerStyle={{ position: "absolute", top: -130, zIndex: 100 }}>
        <CurrencyExchangeIcon fill="black" size={36} />
      </TouchableOpacity>
      <TouchableOpacity containerStyle={{ position: "absolute", top: -75, left: -50 }}>
        <IncomeIcon fill="black" size={36} />
      </TouchableOpacity>
      <TouchableOpacity containerStyle={{ position: "absolute", top: -75, left: 95 }}>
        <ExpenseIcon fill="black" size={36} />
      </TouchableOpacity>
    </View>
  );
}
