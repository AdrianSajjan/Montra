import * as React from "react";
import colors from "@theme/colors";
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from "react-native";

interface Props extends Omit<TextInputProps, "placeholderTextColor" | "style"> {
  style?: StyleProp<ViewStyle>;
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    borderColor: colors["light-20"],
  },
  input: {
    flex: 1,
    marginHorizontal: 16,
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: colors["dark-50"],
  },
});

export default function TextField({ style, secureTextEntry, ...rest }: Props) {
  return (
    <View style={[style, styles.container]}>
      <TextInput style={styles.input} placeholderTextColor={colors["dark-25"]} secureTextEntry={secureTextEntry} {...rest} />
    </View>
  );
}
