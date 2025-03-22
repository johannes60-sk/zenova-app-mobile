import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { Link, useRouter } from "expo-router";
import { ResizeMode, Video } from "expo-av";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { useAuth } from "../context/hook/useAuth";
import { AuthenticationState } from "../types/auth/auth";
import Icon from "react-native-vector-icons/Ionicons";
import { loginSchemaValidation } from "../const/auth/auth.const";

export default function SignIn() {
  const {
    signIn,
    signInWithGoogle,
    isLoading,
    error: firebaseError,
  } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchemaValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: { email: string; password: string }) => {
    const response = await signIn(data.email, data.password);
    if (
      response &&
      response.user &&
      response.userSessionState === AuthenticationState.Authenticated
    ) {
      router.replace("/(tabs)");
    }
  };

  const handleSingnInGoogle = async () => {
    const response = await signInWithGoogle();
    if (
      response &&
      response.user &&
      response.userSessionState === AuthenticationState.Authenticated
    ) {
      router.replace("/(tabs)");
    }
  };

  return (
    <View style={styles.container}>
      <Video
        source={{
          uri: "https://videos.pexels.com/video-files/30234647/12962229_1440_2560_25fps.mp4",
        }}
        rate={1.0}
        volume={1.0}
        isMuted
        resizeMode={ResizeMode.COVER}
        shouldPlay
        isLooping
        style={styles.videoBackground}
      />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>Z</Text>
          </View>
          <Text style={styles.title}>Sign in to Zenova</Text>
          <Text style={styles.subtitle}>
            Let's personalize your fitness with AI
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.inputContainer}>
            <Mail size={20} color="#9CA3AF" style={styles.inputIcon} />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}
          </View>
          <View style={styles.inputContainer}>
            <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
            <Controller
              control={control}
              name="password"
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Password"
                  placeholderTextColor="#9CA3AF"
                  secureTextEntry={!showPassword}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            <Pressable
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              {showPassword ? (
                <Eye size={20} color="#9CA3AF" />
              ) : (
                <EyeOff size={20} color="#9CA3AF" />
              )}
            </Pressable>
            {errors.password && (
              <Text style={styles.errorText}>{errors.password.message}</Text>
            )}
          </View>
          <TouchableOpacity
            style={[
              styles.signInButton,
              // isLoading && styles.signInButtonDisabled,
            ]}
            className={`${isLoading ? "disabled" : ""}`}
            onPress={handleSubmit(handleSignIn)}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <>
                <Text style={styles.signInText}>Sign In</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </>
            )}
          </TouchableOpacity>
          {firebaseError && (
            <Text style={styles.firebaseError}>{firebaseError}</Text>
          )}

          {/* Social Links */}
          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialButton}
              onPress={handleSingnInGoogle}
            >
              <Icon name="logo-google" color="#fff" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="logo-facebook" color="#fff" size={24} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Icon name="logo-apple" color="#fff" size={24} />
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

          {/* Bottom Links */}
          <View style={styles.bottomLinks}>
            <Link href="/sign-in" style={styles.link}>
              <Text style={styles.linkText}>
                Don't have an account?
                <Link href="/sign-up" style={styles.link} className="underline">
                  {" "}
                  Sign Up
                </Link>
              </Text>
            </Link>
            <Link href="/sign-in" style={[styles.link, styles.forgotPassword]}>
              Forgot Password
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000" },
  videoBackground: { position: "absolute", width: "100%", height: "100%" },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
  header: { alignItems: "center", marginBottom: 48 },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
  },

  logo: { fontSize: 24, fontWeight: "bold", color: "#FFF" },
  title: { fontSize: 24, fontWeight: "bold", color: "#FFF", marginBottom: 8 },
  subtitle: { fontSize: 14, color: "#9CA3AF", textAlign: "center" },

  form: { width: "100%" },
  inputContainer: { marginBottom: 16, position: "relative" },
  inputIcon: { position: "absolute", left: 16, top: 14, zIndex: 1 },

  input: {
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    paddingHorizontal: 48,
    color: "#FFF",
    fontSize: 14,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  passwordInput: { paddingRight: 48 },
  eyeIcon: { position: "absolute", right: 16, top: 14 },

  errorText: { color: "#FF6B00", fontSize: 12, marginTop: 4 },

  firebaseError: {
    color: "#FF6B00",
    fontSize: 13,
    marginTop: 8,
    textAlign: "center",
  },
  signInButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    height: 38,
    backgroundColor: "#FF6B00",
    borderRadius: 12,
    marginTop: 8,
  },
  signInButtonDisabled: { opacity: 0.7 },
  signInText: { color: "#FFF", fontSize: 16, fontWeight: "600" },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 38,
    gap: 20,
  },
  arrowIcon: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 5,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#1A1A1A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#333",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 18,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  dividerText: {
    color: "#E0E0E0",
    paddingHorizontal: 16,
    fontSize: 14,
  },
  bottomLinks: {
    alignItems: "center",
  },
  link: {
    paddingVertical: 8,
    color: "#E86C2C",
  },
  linkText: {
    color: "#E0E0E0",
    fontSize: 14,
  },
  forgotPassword: {
    marginTop: 8,
  },
});
