import { PrimaryButton } from "@components/Buttons";
import { Select, TextField } from "@components/Form";
import { Box, Header } from "@components/Layout";
import { SuccessModal } from "@components/Modals";
import { Typography } from "@components/Typography";
import { FontAwesome } from "@expo/vector-icons";
import colors from "@theme/colors";
import * as React from "react";
import { ScrollView, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors["violet-100"],
  },
  content: {
    flexGrow: 1,
  },
  amount: {
    flex: 1,
    fontSize: 64,
    lineHeight: 80,
    fontFamily: "Inter-SemiBold",
    color: colors["light-100"],
  },
});

const accounts = [
  {
    key: "bank",
    value: "bank",
    label: "Bank",
  },
  {
    key: "wallet",
    value: "wallet",
    label: "Wallet",
  },
  {
    key: "card",
    value: "card",
    label: "Credit Card",
  },
];

export default function AddAccount() {
  const [select, setSelect] = React.useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Box marginHorizontal={18} flex={1} justifyContent="space-between">
          <Header title="Add new account" color="light-100" back />
          <Box>
            <Typography color="light-20" variant="title-3">
              Balance
            </Typography>
            <Box flexDirection="row" alignItems="center" marginTop={4}>
              <FontAwesome name="inr" color={colors["light-100"]} size={56} />
              <Box marginHorizontal={4} />
              <TextInput style={styles.amount} placeholder="00.0" placeholderTextColor={colors["light-100"]} />
            </Box>
          </Box>
        </Box>
        <Box padding={24} backgroundColor={colors["light-100"]} borderTopLeftRadius={32} borderTopRightRadius={32}>
          <TextField placeholder="Name" />
          <Box marginVertical={8} />
          <Select placeholder="Account Type" list={accounts} value={select} onChange={setSelect} />
          <Box marginVertical={18} />
          <PrimaryButton title="Continue" />
        </Box>
      </ScrollView>
      <SuccessModal visible={false} />
    </SafeAreaView>
  );
}
