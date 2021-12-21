import * as React from "react";
import colors from "@theme/colors";
import months from "@constants/month";
import { Pill } from "@components/Form";
import { Box } from "@components/Layout";
import { IncomeIcon, NotificationIcon } from "@components/Icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { HomeTabsParamList, MainStackParamList } from "@navigation/types";
import { CompositeNavigationProp, useNavigation } from "@react-navigation/core";
import { Typography } from "@components/Typography";
import { SpendFrequencyChart } from "@components/Charts";
import { ActionButton } from "@components/Buttons";

type HomeNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<HomeTabsParamList, "Home">,
  StackNavigationProp<MainStackParamList, "Main">
>;

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    backgroundColor: colors["light-100"],
  },
  avatarWrapper: {
    height: 36,
    width: 36,
    borderRadius: 36,
    backgroundColor: colors["light-100"],
    borderColor: colors["violet-100"],
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 32,
    resizeMode: "cover",
  },
  box: {
    flex: 1,
    borderRadius: 28,
    flexDirection: "row",
    height: 70,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<HomeNavigationProp>();

  const [month, setMonth] = React.useState("");

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <LinearGradient colors={["#FFF1D7", "#F8EDD855"]} style={{ borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <Box paddingHorizontal={16} paddingTop={insets.top + 20} paddingBottom={32}>
          <Box flexDirection="row" justifyContent="space-between" alignItems="center">
            <View style={styles.avatarWrapper}>
              <Image source={{ uri: "https://static.wikia.nocookie.net/harrypotter/images/0/08/Emma_Watson.jpg" }} style={styles.avatar} />
            </View>
            <Pill label="Month" list={months} value={month} onChange={setMonth} />
            <TouchableOpacity activeOpacity={0.6}>
              <NotificationIcon fill={colors["violet-100"]} size={32} />
            </TouchableOpacity>
          </Box>
          <Box marginTop={24}>
            <Typography variant="regular-3" color="dark-25" textAlign="center">
              Account Balance
            </Typography>
            <Box marginVertical={4} />
            <Typography variant="title-1" textAlign="center">
              Rs. 45,000
            </Typography>
          </Box>
          <Box marginTop={24} flexDirection="row">
            <View style={[styles.box, { backgroundColor: colors["green-100"] }]}>
              <Box borderRadius={16} height={48} width={48} alignItems="center" justifyContent="center" backgroundColor="#FFFFFF">
                <IncomeIcon size={32} fill={colors["green-100"]} />
              </Box>
              <Box paddingLeft={10} flex={1}>
                <Typography variant="regular-3" color="light-100">
                  Income
                </Typography>
                <Box marginVertical={2} />
                <Typography variant="regular-2" color="light-100">
                  Rs. 50000
                </Typography>
              </Box>
            </View>
            <Box width={12} />
            <View style={[styles.box, { backgroundColor: colors["red-100"] }]}>
              <Box borderRadius={16} height={48} width={48} alignItems="center" justifyContent="center" backgroundColor="#FFFFFF">
                <IncomeIcon size={32} fill={colors["red-100"]} />
              </Box>
              <Box paddingLeft={10} flex={1}>
                <Typography variant="regular-3" color="light-100">
                  Expenses
                </Typography>
                <Box marginVertical={2} />
                <Typography variant="regular-2" color="light-100">
                  Rs. 5000
                </Typography>
              </Box>
            </View>
          </Box>
        </Box>
      </LinearGradient>
      <Box>
        <Box paddingTop={18} paddingHorizontal={16} paddingBottom={12}>
          <Typography variant="title-3">Spend Frequency</Typography>
        </Box>
        <SpendFrequencyChart />
      </Box>
      <Box paddingHorizontal={16}>
        <Box flexDirection="row" alignItems="center" justifyContent="space-between">
          <Typography variant="title-3">Recent Transactions</Typography>
          <ActionButton title="See All" />
        </Box>
      </Box>
    </ScrollView>
  );
}
