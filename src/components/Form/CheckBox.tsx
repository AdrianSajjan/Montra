import * as React from "react";
import colors from "@theme/colors";
import { Feather } from "@expo/vector-icons";
import { Typography } from "@components/Typography";
import { CheckBoxProps, StyleSheet, TouchableOpacity, View } from "react-native";

interface Props extends CheckBoxProps {}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    width: 24,
    height: 24,
    marginLeft: 4,
    borderWidth: 1,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    borderColor: colors["violet-100"],
  },
  label: {
    marginLeft: 16,
  },
});

export default function CheckBox({ style, children, value, onValueChange, ...rest }: Props) {
  const onPress = () => {
    onValueChange && onValueChange(!value);
  };

  const backgroundColor = value ? colors["violet-100"] : "transparent";

  return (
    <View style={[style, styles.container]}>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress} activeOpacity={0.8}>
        {value && <Feather name="check" size={20} color={colors["light-100"]} />}
      </TouchableOpacity>
      <Typography style={styles.label} variant="regular-3">
        {children}
      </Typography>
    </View>
  );
}
