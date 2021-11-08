import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import Animated, { useAnimatedStyle, useSharedValue, withTiming, Easing } from "react-native-reanimated";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

const fieldSize = 6;
const cellSize = 36;

interface CellProps {
  index: number;
  value: string;
  onChange: (value: string) => void;
}

interface OTPProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const styles = StyleSheet.create({
  cell: {
    fontSize: 32,
    lineHeight: 40,
    width: cellSize,
    borderRadius: 12,
    textAlign: "center",
    overflow: "visible",
    fontFamily: "Inter-SemiBold",
  },
  backdrop: {
    width: 16,
    height: 16,
    borderRadius: 24,
    position: "absolute",
    backgroundColor: colors["light-20"],
  },
});

const Cell = React.forwardRef<TextInput, CellProps>(({ index, onChange, value }, ref) => {
  const scale = useSharedValue(1);

  React.useEffect(() => {
    if (value[index] && value[index].trim()) {
      scale.value = 0;
    } else {
      scale.value = 1;
    }
  }, [value]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 250, easing: Easing.ease }) }],
    };
  });

  const props: TextInputProps = {
    maxLength: 1,
    style: styles.cell,
    value: value[index],
    onChangeText: onChange,
    keyboardType: "number-pad",
  };

  return (
    <Box alignItems="center" justifyContent="center" key={`${index}`}>
      <Animated.View style={[styles.backdrop, style]} />
      <TextInput ref={ref} {...props} />
    </Box>
  );
});

export default function OTPField({ onChange, value }: OTPProps) {
  const ref = React.useRef<Array<TextInput>>([]);

  React.useEffect(() => {
    ref.current[value.length]?.focus();
  }, []);

  const onChangeText = (index: number) => (v: string) => {
    if (v.length) {
      const arr = value.split("");
      arr[index] = v;
      const code = arr.join("");
      onChange(code);
      ref.current[index + 1]?.focus();
    } else {
      const chars = value.split("");
      const code = chars.filter((_, idx) => idx !== index).join("");
      onChange(code);
      ref.current[index - 1]?.focus();
    }
  };

  return (
    <Box flexDirection="row">
      {Array(fieldSize)
        .fill(0)
        .map((_, index) => (
          <Cell ref={(e) => (ref.current[index] = e!)} key={String(index)} index={index} onChange={onChangeText(index)} value={value} />
        ))}
    </Box>
  );
}
