import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { Header } from "@components/Layout";
import { TextField } from "@components/Form";
import { PrimaryButton } from "@components/Buttons";
import { Typography } from "@components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["light-100"],
  },
  content: {
    flexGrow: 1,
    paddingBottom: 48,
    paddingHorizontal: 24,
  },
  field: {
    marginTop: 24,
  },
});

export default function RegisterScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Forgot Password" back />
        <Box marginTop={72}>
          <Typography variant="title-2">Dont Worry.</Typography>
          <Typography variant="title-2">Enter your email and we'll send you a link to reset your password.</Typography>
        </Box>
        <Box marginTop={24}>
          <TextField placeholder="Email" style={styles.field} />
        </Box>
        <Box marginTop={32}>
          <PrimaryButton title="Continue" />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
