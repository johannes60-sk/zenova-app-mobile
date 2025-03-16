import { Tabs } from "expo-router";
import React from "react";
import { Crown, Dumbbell, Play, Target } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Set opacity to 0.5
        borderTopWidth: 1,
        height: 80,
        paddingTop: 10,
        paddingBottom: 15,
        justifyContent: 'flex-start',
      },
      tabBarActiveTintColor: "#FFFFFF",
      tabBarInactiveTintColor: "#666666",
      }}
    >
      <Tabs.Screen
      name="index"
      options={{
        title: "",
        tabBarIcon: ({ color }) => (
        <Play fill="none" size={24} color={color} />
        ),
      }}
      />
      <Tabs.Screen
      name="target"
      options={{
        title: "",
        tabBarIcon: ({ color }) => <Target size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="workouts"
      options={{
        title: "",
        tabBarIcon: ({ color }) => <Dumbbell size={24} color={color} />,
      }}
      />
      <Tabs.Screen
      name="premium"
      options={{
        title: "",
        tabBarIcon: ({ color }) => <Crown size={24} color={color} />,
      }}
      />
    </Tabs>
  );
}
