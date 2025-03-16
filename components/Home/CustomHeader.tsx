import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Crown, MessageCircle, ArrowRight } from "lucide-react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <Image
          source={{
            uri: "https://i.pravatar.cc/300",
          }}
          style={styles.profileImage}
        />
        <Text style={styles.level}>1</Text>
        <Text style={styles.appName}>Zenova</Text>
      </View>
      <View style={styles.headerRight}>
        <Crown color="#FFFFFF" size={24} />
        <MessageCircle color="#FFFFFF" size={24} style={{ marginLeft: 15 }} />
        <View style={styles.streakContainer}>
          <Text style={styles.streakText}>0</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },

  streakContainer: {
    backgroundColor: "#333333",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginLeft: 15,
  },

  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  streakText: {
    color: "#FFFFFF",
    fontSize: 16,
  },

  level: {
    color: "#FFD700",
    marginLeft: 10,
    fontSize: 16,
  },

  appName: {
    color: "#FFFFFF",
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
