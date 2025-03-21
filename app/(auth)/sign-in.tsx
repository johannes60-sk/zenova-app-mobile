import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Pressable,
  Platform,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { Mail, Lock, Eye, EyeOff } from "lucide-react-native";
import { ResizeMode, Video } from "expo-av";
import { useAuth } from "../context/hook/useAuth";
import Icon from "react-native-vector-icons/Ionicons";

export default function SignIn() {
  const { signIn, isLoading, error } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignIn = async () => {
    const success = await signIn(email, password);
    if (success) {
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

      {/* Content Container */}
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
            <TextInput
              style={styles.input}
              placeholder="Email address"
              placeholderTextColor="#9CA3AF"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Lock size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput
              style={[styles.input, styles.passwordInput]}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
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

          <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
            <Text style={styles.signInText}>Sign in</Text>
          </TouchableOpacity>

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

          <View style={styles.divider}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or</Text>
            <View style={styles.dividerLine} />
          </View>

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
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
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
  header: {
    alignItems: "center",
    marginBottom: 48,
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
  form: {
    width: "100%",
  },
  inputContainer: {
    marginBottom: 16,
    position: "relative",
  },
  inputIcon: {
    position: "absolute",
    left: 16,
    top: 14,
    zIndex: 1,
  },
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
  passwordInput: {
    paddingRight: 48,
  },
  eyeIcon: {
    position: "absolute",
    right: 16,
    top: 14,
  },
  signInButton: {
    height: 48,
    backgroundColor: "#FF6B00",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
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
  signInText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 38,
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
    marginVertical: 24,
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
    marginTop: 20,
    alignItems: "center",
  },
  link: {
    paddingVertical: 8,
    color: "#E86C2C",
    // textDecorationLine: "underline",
  },
  linkText: {
    color: "#E0E0E0",
    fontSize: 14,
  },
  forgotPassword: {
    marginTop: 15,
  },
});
