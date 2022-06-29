import * as React from "react";
import colors from "@theme/colors";
import { View } from "react-native";
import { HomeScreen } from "@screens/Home";
import { TabButton } from "@components/Buttons";
import { OnboardScreen } from "@screens/Onboard";
import { createStackNavigator, StackNavigationOptions } from "@react-navigation/stack";
import { HomeIcon, PieChartIcon, TransactionIcon, UserIcon } from "@components/Icons";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { AuthStackParamList, HomeTabsParamList, MainStackParamList } from "@interfaces/navigation";
import {
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetEmailSentScreen,
  ResetPasswordScreen,
  VerifyScreen,
} from "@screens/Authentication";

const Tab = createBottomTabNavigator<HomeTabsParamList>();
const AppStack = createStackNavigator<MainStackParamList>();
const AuthStack = createStackNavigator<AuthStackParamList>();

const AuthScreens = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <AuthStack.Navigator screenOptions={screenOptions}>
      <AuthStack.Screen name="Onboard" component={OnboardScreen} />
      <AuthStack.Screen name="Register" component={RegisterScreen} />
      <AuthStack.Screen name="Verify" component={VerifyScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Forgot-Password" component={ForgotPasswordScreen} />
      <AuthStack.Screen name="Password-Reset-Email" component={ResetEmailSentScreen} />
      <AuthStack.Screen name="Reset-Password" component={ResetPasswordScreen} />
    </AuthStack.Navigator>
  );
};

const AppStackScreens = () => {
  const screenOptions: StackNavigationOptions = {
    headerShown: false,
  };

  return (
    <AppStack.Navigator screenOptions={screenOptions}>
      <AppStack.Screen name="Main" component={AuthScreens} />
    </AppStack.Navigator>
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
  return <AppStackScreens />;
}
