import { useRootNavigationState, useRouter, useSegments } from "expo-router";
import { User } from "firebase/auth";
import { useEffect } from "react";

const useProtectedRoute = (user: User | null) => {
  const segments = useSegments();
  const router = useRouter();
  const navigationState = useRootNavigationState();

  useEffect(() => {
    if (!navigationState?.key) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!user && !inAuthGroup) {
      router.replace("/sign-in");
    } else if (user && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [user, segments, navigationState, router]);
};
export default useProtectedRoute;
