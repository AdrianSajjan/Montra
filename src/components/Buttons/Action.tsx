import * as React from "react";
import colors from "@theme/colors";
import typography from "@theme/typography";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ButtonProps } from "@interfaces/components";

const styles = StyleSheet.create({
  button: {
    height: 32,
    borderRadius: 32,
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 16,
    justifyContent: "center",
    backgroundColor: colors["violet-20"],
  },
  text: {
    ...typography["regular-3"],
    color: colors["violet-100"],
  },
});

export default function ActionButton({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} containerStyle={styles.button} activeOpacity={0.6}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
