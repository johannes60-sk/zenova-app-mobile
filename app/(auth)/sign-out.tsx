import React from "react";
import { Button, View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "../context/hook/useAuth";

const SignOut = () => {
  const { signOut, isLoading, error } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    const logout = await signOut();
    if (logout) {
      router.replace("/(auth)");
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Se déconnecter" onPress={handleSignOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SignOut;
