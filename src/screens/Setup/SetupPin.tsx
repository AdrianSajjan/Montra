import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { FontAwesome5 } from "@expo/vector-icons";
import { KeypadButton } from "@components/Buttons";
import { ArrowRightIcon } from "@components/Icons";
import { Typography } from "@components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, useWindowDimensions } from "react-native";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, processColor } from "react-native-reanimated";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 12,
    backgroundColor: colors["violet-100"],
  },
  dot: {
    width: 36,
    height: 36,
    borderWidth: 2,
    borderRadius: 36,
  },
});

const rows = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

const pinSize = 4;

const Dot = ({ index, value }: { index: number; value: string }) => {
  const borderColor = useSharedValue<any>(colors["light-20"]);
  const backgroundColor = useSharedValue<any>("transparent");

  React.useEffect(() => {
    if (value[index]) {
      borderColor.value = withTiming(processColor(colors["light-100"]), { duration: 100 });
      backgroundColor.value = withTiming(processColor(colors["light-100"]), { duration: 100 });
    } else {
      borderColor.value = withTiming(processColor(colors["light-20"]), { duration: 100 });
      backgroundColor.value = withTiming(processColor("transparent"), { duration: 100 });
    }
  }, [value]);

  const style = useAnimatedStyle(() => {
    return {
      borderColor: borderColor.value,
      backgroundColor: backgroundColor.value,
    };
  });

  return (
    <Box key={String(index)} padding={8}>
      <Animated.View style={[styles.dot, style]} />
    </Box>
  );
};

export default function SetupPinScreen() {
  const [pin, setPIN] = React.useState("");

  const onAddPin = (value: string) => {
    if (pin.length < 4) {
      setPIN((state) => state + value);
    }
  };

  const onSubtractPin = () => {
    setPIN((state) => state.slice(0, -1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Box marginTop={64} flex={1} justifyContent="space-between">
        <Box>
          <Typography variant="title-3" color="light-80" textAlign="center">
            Lets setup your PIN
          </Typography>
          <Box marginTop={64} flexDirection="row" alignItems="center" justifyContent="center">
            {Array(pinSize)
              .fill(0)
              .map((_, index) => (
                <Dot key={String(index)} index={index} value={pin} />
              ))}
          </Box>
        </Box>
        <Box>
          <Box flexDirection="row" flexWrap="wrap">
            {rows.map((value) => (
              <KeypadButton text={value} key={value} onPress={onAddPin} />
            ))}
          </Box>
          <Box flexDirection="row" justifyContent="flex-end">
            <KeypadButton icon={<FontAwesome5 name="backspace" color={colors["light-80"]} size={32} />} onPress={onSubtractPin} />
            <KeypadButton text="0" onPress={onAddPin} />
            <KeypadButton icon={<ArrowRightIcon fill={colors["light-80"]} size={56} />} />
          </Box>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
