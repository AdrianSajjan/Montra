import * as React from "react";
import colors from "@theme/colors";
import { View } from "react-native";
import { HomeScreen } from "@screens/Home";
import { TabButton } from "@components/Buttons";
import { OnboardScreen } from "@screens/Onboard";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { HomeIcon, PieChartIcon, TransactionIcon, UserIcon } from "@components/Icons";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetEmailSentScreen,
  ResetPasswordScreen,
  VerifyScreen,
} from "@screens/Authentication";
import { AuthStackParamList } from "./types";

const Stack = createStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator();

const AuthScreens = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Onboard" component={OnboardScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Verify" component={VerifyScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Forgot-Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Password-Reset-Email" component={ResetEmailSentScreen} />
      <Stack.Screen name="Reset-Password" component={ResetPasswordScreen} />
    </Stack.Navigator>
  );
};

const TabScreens = () => {
  const screenOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarStyle: {
      height: 70,
      elevation: 0,
      borderTopWidth: 0,
      borderLeftWidth: 8,
      borderRightWidth: 8,
      position: "absolute",
      backgroundColor: "transparent",
      borderColor: colors["light-80"],
    },
    tabBarItemStyle: {
      backgroundColor: colors["light-80"],
    },
    tabBarLabelStyle: {
      bottom: 12,
      fontSize: 10,
      fontFamily: "Inter-Medium",
    },
    tabBarInactiveTintColor: "#C6C6C6",
    tabBarActiveTintColor: colors["violet-100"],
  };

  const homeOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, ...rest }) => <HomeIcon fill={color} {...rest} />,
  };

  const transactionOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, ...rest }) => <TransactionIcon fill={color} {...rest} />,
  };

  const addOptions: BottomTabNavigationOptions = {
    tabBarButton: (props) => <TabButton {...props} />,
  };

  const budgetOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, ...rest }) => <PieChartIcon fill={color} {...rest} />,
  };

  const profileOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ color, ...rest }) => <UserIcon fill={color} {...rest} />,
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen name="Home" component={HomeScreen} options={homeOptions} />
      <Tab.Screen name="Transaction" component={HomeScreen} options={transactionOptions} />
      <Tab.Screen name="Add" component={View} options={addOptions} />
      <Tab.Screen name="Budget" component={HomeScreen} options={budgetOptions} />
      <Tab.Screen name="Profile" component={HomeScreen} options={profileOptions} />
    </Tab.Navigator>
  );
};

export default function Main() {
  return <AuthScreens />;
}
