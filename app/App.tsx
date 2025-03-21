import React, { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { AuthProvider } from "./context/AuthContext";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { useAuth } from "./context/hook/useAuth";

export default function App() {
  const colorScheme = useColorScheme();

  const context = useAuth();

  useEffect(() => {
    if (!context.user) {
      console.log("Utilisateur déconnecté");
    } else {
      console.log("Utilisateur connecté");
    }
  }, [context.user]);

  return (
    <AuthProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack screenOptions={{ headerShown: false }}>
            {context.user ? (
              <Stack.Screen name="(tabs)" />
            ) : (
              <Stack.Screen name="(auth)" />
            )}
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </GestureHandlerRootView>
    </AuthProvider>
  );
}
