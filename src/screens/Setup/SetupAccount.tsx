import { PrimaryButton } from "@components/Buttons";
import { Box } from "@components/Layout";
import { Typography } from "@components/Typography";
import colors from "@theme/colors";
import * as React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 36,
    color: colors["dark-75"],
    fontFamily: "Inter-Medium",
  },
});

export default function SetupAccountScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Box marginTop={64}>
        <Text style={styles.title}>Let's setup your account!</Text>
        <Box marginVertical={12} />
        <Typography variant="regular-1">Account can be your bank, credit card{"\n"}or your wallet</Typography>
      </Box>
      <Box marginBottom={36}>
        <PrimaryButton title="Let's Go" />
      </Box>
    </SafeAreaView>
  );
}
