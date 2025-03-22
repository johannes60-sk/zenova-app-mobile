import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Pressable,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft } from "lucide-react-native";
import { useAuth } from "../context/hook/useAuth";
import { ResizeMode, Video } from "expo-av";
import { Link, useRouter } from "expo-router";
import Icon from "react-native-vector-icons/Ionicons";
import { AuthenticationState } from "../types/auth/auth";
import { signUpSchemaValidation } from "../const/auth/auth.const";

export default function SignUp() {
  const { signUp, isLoading, error: firebaseError } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchemaValidation),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: {
    email: string;
    username: string;
    password: string;
    confirmPassword: string;
  }) => {
    const response = await signUp(data.email, data.username, data.password);
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
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <View style={styles.overlay} />

      <View style={styles.form}>
        <Link href="/" style={styles.backButton}>
          <ArrowLeft size={20} color="#FFF" />
        </Link>

        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>S</Text>
          </View>
          <Text style={styles.title}>Create your account</Text>
          <Text style={styles.subtitle}>
            Join the future of AI-powered fitness
          </Text>
        </View>

        {/* Username */}
        <View style={styles.inputContainer}>
          <User size={20} color="#9CA3AF" style={styles.inputIcon} />
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChange}
                autoCapitalize="none"
              />
            )}
          />
        </View>
        {errors.username && (
          <Text style={styles.error}>{errors.username.message}</Text>
        )}

        {/* Email */}
        <View style={styles.inputContainer}>
          <Mail size={20} color="#9CA3AF" style={styles.inputIcon} />
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email address"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
          />
        </View>
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}

        {/* Password */}
        <View style={styles.inputContainer}>
          <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Password"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showPassword}
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
        </View>
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Confirm Password */}
        <View style={styles.inputContainer}>
          <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
          <Controller
            control={control}
            name="confirmPassword"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[styles.input, styles.passwordInput]}
                placeholder="Confirm password"
                placeholderTextColor="#9CA3AF"
                value={value}
                onChangeText={onChange}
                secureTextEntry={!showConfirmPassword}
              />
            )}
          />
          <Pressable
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            style={styles.eyeIcon}
          >
            {showConfirmPassword ? (
              <Eye size={20} color="#9CA3AF" />
            ) : (
              <EyeOff size={20} color="#9CA3AF" />
            )}
          </Pressable>
        </View>
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={handleSubmit(onSubmit)}
          className={`${isLoading ? "disabled" : ""}`}
          disabled={isLoading}
        >
          {isLoading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <>
              <Text style={styles.signUpText}>Create Account</Text>
              <Text style={styles.arrowIcon}>→</Text>
            </>
          )}
        </TouchableOpacity>
        {firebaseError && (
          <Text style={styles.firebaseError}>{firebaseError}</Text>
        )}

        {/* Social Links */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Icon name="logo-instagram" color="#fff" size={24} />
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

        {/* Sign In Link */}
        <View style={styles.bottomLinks}>
          <Text style={styles.linkText}>
            Already have an account?
            <Link href="/sign-in" style={styles.link} className="underline">
              {" "}
              Sign In
            </Link>
          </Text>
          <Link href="/sign-in" style={[styles.link, styles.forgotPassword]}>
            Forgot Password
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  form: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    maxWidth: 400,
    width: "100%",
    alignSelf: "center",
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 24,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    marginBottom: 40,
  },
  logoContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: "#FF6B00",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    ...Platform.select({
      web: {
        boxShadow: "0 0 20px rgba(255, 107, 0, 0.3)",
      },
      default: {
        shadowColor: "#FF6B00",
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
      },
    }),
  },
  logo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#9CA3AF",
    textAlign: "center",
  },
  inputContainer: {
    marginBottom: 15,
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    top: 14,
  },
  input: {
    height: 48,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    paddingHorizontal: 48,
    color: "#FFF",
    fontSize: 14,
  },
  passwordInput: {
    paddingRight: 48,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  bottomLinks: {
    alignItems: "center",
  },
  signUpButton: {
    flexDirection: "row",
    height: 38,
    backgroundColor: "#FF6B00",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  signUpText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  arrowIcon: {
    color: "#fff",
    fontSize: 24,
    marginLeft: 5,
  },
  error: {
    color: "#FF6B00",
    fontSize: 12,
    marginBottom: 10,
    marginTop: -15,
  },
  firebaseError: {
    color: "#FF6B00",
    fontSize: 13,
    marginTop: 8,
    textAlign: "center",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    gap: 20,
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
  link: {
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
