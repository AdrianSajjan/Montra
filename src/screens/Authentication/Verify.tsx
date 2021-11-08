import React from "react";
import colors from "@theme/colors";
import { OTPField } from "@components/Form";
import { Box, Header } from "@components/Layout";
import { Typography } from "@components/Typography";
import { PrimaryButton } from "@components/Buttons";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["light-100"],
  },
  content: {
    flexGrow: 1,
    paddingBottom: 48,
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  field: {
    marginTop: 24,
  },
  title: {
    fontSize: 36,
    lineHeight: 45,
    color: colors["dark-100"],
    fontFamily: "Inter-Medium",
  },
  resend: {
    textDecorationLine: "underline",
  },
});

export default function VerifyScreen() {
  const [otp, setOTP] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Verification" back />
        <Box marginTop={48}>
          <Text style={styles.title}>Enter your Verification Code</Text>
          <Box marginVertical={16} />
          <OTPField value={otp} onChange={setOTP} />
          <Box marginVertical={18} />
          <Typography variant="title-3" color="violet-100">
            04:59
          </Typography>
          <Box marginVertical={8} />
          <Typography variant="regular-1">
            We sent a verification code to your email{" "}
            <Typography variant="regular-1" color="violet-100">
              adrian*****@gmail.com
            </Typography>
            . Please check your inbox.
          </Typography>
          <Box marginVertical={8} />
          <TouchableOpacity activeOpacity={0.6}>
            <Typography variant="regular-1" color="violet-100" style={styles.resend}>
              Didn't recieve the code? Send again.
            </Typography>
          </TouchableOpacity>
          <Box marginVertical={24} />
          <PrimaryButton title="Verify" />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
