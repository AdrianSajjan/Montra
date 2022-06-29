import * as React from "react";
import colors from "@theme/colors";
import { Box } from "@components/Layout";
import { FacebookIcon, GoogleIcon } from "@components/Icons";
import { OutlinedButton, PrimaryButton } from "@components/Buttons";
import { Typography } from "@components/Typography";
import { TextField, CheckBox } from "@components/Form";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Header } from "@components/Layout";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthStackParamList } from "@interfaces/navigation";
import { useNavigation } from "@react-navigation/core";

type RegisterNavigationProp = StackNavigationProp<AuthStackParamList, "Register">;

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
  underline: {
    textDecorationLine: "underline",
  },
});

export default function RegisterScreen() {
  const navigation = useNavigation<RegisterNavigationProp>();

  const [checked, setChecked] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Header title="Sign Up" back />
        <Box marginTop={64}>
          <TextField placeholder="Name" />
          <TextField placeholder="Email" style={styles.field} />
          <TextField placeholder="Password" style={styles.field} />
          <CheckBox style={styles.field} value={checked} onValueChange={setChecked}>
            <Typography variant="regular-3">
              By signing up, you agree to the{" "}
              <Typography variant="regular-3" color="violet-100">
                Terms of{"\n"}Service and Privacy Policy
              </Typography>
            </Typography>
          </CheckBox>
        </Box>
        <Box marginTop={36}>
          <PrimaryButton title="Sign Up" onPress={() => navigation.navigate("Verify")} />
          <Box marginVertical={12} />
          <Typography variant="small" color="dark-25" textAlign="center">
            Or With
          </Typography>
          <Box marginVertical={12} />
          <OutlinedButton title="Sign Up with Google" icon={GoogleIcon} />
          <Box marginVertical={8} />
          <OutlinedButton title="Sign Up with Facebook" icon={FacebookIcon} />
        </Box>
        <Box flexDirection="row" marginTop={24} alignItems="center" justifyContent="center">
          <Typography variant="regular-1" color="dark-25">
            Already have and account?
          </Typography>
          <Box marginHorizontal={2} />
          <TouchableOpacity activeOpacity={0.6} onPress={() => navigation.navigate("Login")}>
            <Typography color="violet-100" style={styles.underline}>
              Login
            </Typography>
          </TouchableOpacity>
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
}
