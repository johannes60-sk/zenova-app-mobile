import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type WorkoutCardProps = {
  title: string;
  exercises: number;
  imageUrl: string;
};

export const WorkoutCard = ({
  title,
  exercises,
  imageUrl,
}: WorkoutCardProps) => {
  return (
    <View style={styles.workoutCard}>
      <Image source={{ uri: imageUrl }} style={styles.workoutImage} />
      <View style={styles.workoutInfo}>
        <Text style={styles.workoutTitle}>{title}</Text>
        <Text style={styles.workoutExercises}>{exercises} exercises</Text>
      </View>
      <View style={styles.workoutStats}>
        <View style={styles.workoutStat}>
          <Text style={styles.workoutStatValue}>0</Text>
          <Text style={styles.workoutStatLabel}>Total</Text>
        </View>
        <View style={styles.workoutStat}>
          <Text style={styles.workoutStatValue}>00:00</Text>
          <Text style={styles.workoutStatLabel}>Timer</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.workoutButton}>
        <Text style={styles.workoutButtonText}>→</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutCard: {
    backgroundColor: "#1A1A1A",
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },

  workoutTimeTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },

  workoutImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  workoutInfo: {
    flex: 1,
    marginLeft: 15,
  },
  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  workoutExercises: {
    color: "#666666",
    fontSize: 14,
  },
  workoutStats: {
    flexDirection: "row",
    marginRight: 15,
  },
  workoutStat: {
    alignItems: "center",
    marginLeft: 15,
  },
  workoutStatValue: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  workoutStatLabel: {
    color: "#666666",
    fontSize: 12,
  },
  workoutButton: {
    backgroundColor: "#333333",
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  workoutButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
});
