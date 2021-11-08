import React from "react";
import Main from "@navigation/Main";
import { Box } from "@components/Layout";
import { StatusBar } from "expo-status-bar";
import { PortalProvider } from "@gorhom/portal";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <Box flex={1}>
        <PortalProvider>
          <StatusBar />
          <NavigationContainer>
            <Main />
          </NavigationContainer>
        </PortalProvider>
      </Box>
    </SafeAreaProvider>
  );
}
