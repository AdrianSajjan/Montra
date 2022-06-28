import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { Header } from "@components/Layout";
import { TextField } from "@components/Form";
import { PrimaryButton } from "@components/Buttons";
import { Typography } from "@components/Typography";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, ScrollView, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@interfaces/navigation";
import { useNavigation } from "@react-navigation/core";

type ResetEmailNavigationProp = StackNavigationProp<AuthStackParamList, "Password-Reset-Email">;

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
});

export default function ResetEmailSentScreen() {
  const navigation = useNavigation<ResetEmailNavigationProp>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Box marginTop={48}>
          <Image source={require("@images/email-sent.png")} />
          <Typography variant="title-2" color="dark-100" textAlign="center">
            Your email is on the way
          </Typography>
          <Box marginVertical={12} />
          <Typography variant="regular-1" color="dark-25" textAlign="center">
            Check your email adrian******@gmail.com and follow the instructions to reset your password
          </Typography>
        </Box>
        <Box marginTop={32}>
          <PrimaryButton title="Back to Login" onPress={() => navigation.navigate("Login")} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
