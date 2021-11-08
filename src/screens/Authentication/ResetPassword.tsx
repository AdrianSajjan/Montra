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

export default function ResetPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Reset Password" back />
        <Box marginTop={56}>
          <TextField placeholder="New Password" style={styles.field} />
          <TextField placeholder="Retype New Password" style={styles.field} />
        </Box>
        <Box marginTop={32}>
          <PrimaryButton title="Continue" />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
