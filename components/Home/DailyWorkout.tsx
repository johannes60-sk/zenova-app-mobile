import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ArrowRight, Timer, Target } from "lucide-react-native";
import { DayIndexFormatToDayName } from "@/app/utils/day-index-format-to-day-name";
import { DAILY_WORKOUTS } from "@/app/const/home";
import { ButtonText, GradientCtaButton } from "@/app/styles/custom-component";
import Icon from "react-native-vector-icons/Ionicons";

type DailyWorkoutProps = {
  day: number;
};

export const DailyWorkout = ({ day }: DailyWorkoutProps) => {
  const dayName = DayIndexFormatToDayName(day);
  const workout = DAILY_WORKOUTS[dayName];
  if (!workout) return null;

  return (
    <View style={styles.dailyWorkoutSection}>
      <View style={styles.workoutHeader}>
        <Image
          source={{ uri: workout.mainImage }}
          style={styles.workoutMainImage}
        />
        <View style={styles.workoutHeaderOverlay}>
          <Text style={styles.workoutTitle}>{workout.title}</Text>
          <Text style={styles.workoutSubtitle}>
            {workout.exercises.length} exercises
          </Text>
        </View>
        <View style={styles.workoutStats}>
          <View style={styles.workoutStat}>
            <Target size={20} color="#FFFFFF" />
            <Text style={styles.workoutStatValue}>0</Text>
            <Text style={styles.workoutStatLabel}>Total</Text>
          </View>
          <View style={styles.workoutStat}>
            <Timer size={20} color="#FFFFFF" />
            <Text style={styles.workoutStatValue}>00:00</Text>
            <Text style={styles.workoutStatLabel}>Timer</Text>
          </View>
        </View>
      </View>

      <View style={styles.exerciseListContainer}>
        <View style={styles.exerciseList}>
          {workout.exercises.slice(0, 4).map((exercise, index) => (
            <View key={exercise.id} style={styles.exerciseItem}>
              <Image
                source={{ uri: exercise.image }}
                style={styles.exerciseImage}
              />
            </View>
          ))}
          {workout.exercises.length > 4 && (
            <View style={styles.moreExercises}>
              <Text style={styles.moreExercisesText}>
                +{workout.exercises.length - 4} more
              </Text>
            </View>
          )}
        </View>
        <GradientCtaButton>
          <View style={styles.startWorkoutButton}>
            <ButtonText>Start workout</ButtonText>
            <Icon
              name="arrow-forward-outline"
              className="pl-1"
              color="#FFFFFF"
              size={18}
            />
          </View>
        </GradientCtaButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dailyWorkoutSection: {
    marginTop: 15,
    padding: 15,
  },
  workoutHeader: {
    position: "relative",
    height: 190,
    overflow: "hidden",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  workoutMainImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 0,
    margin: 0,
    padding: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopStartRadius: 15,
    borderTopEndRadius: 15,
    borderBottomLeftRadius: 15,
  },
  workoutHeaderOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  workoutTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "bold",
  },
  workoutSubtitle: {
    color: "#FFFFFF",
    fontSize: 16,
    opacity: 0.8,
  },
  workoutStats: {
    position: "absolute",
    top: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.7)",
    borderRadius: 15,
    padding: 10,
  },
  workoutStat: {
    alignItems: "center",
    marginBottom: 10,
  },
  workoutStatValue: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 2,
  },
  workoutStatLabel: {
    color: "#FFFFFF",
    fontSize: 12,
    opacity: 0.8,
  },
  exerciseListContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  exerciseList: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "65%",
  },
  exerciseItem: {
    width: "20%",
    marginRight: "2%",
    marginBottom: 10,
    overflow: "hidden",
  },
  exerciseImage: {
    width: "100%",
    height: 60,
    borderRadius: 8,
  },
  moreExercises: {
    width: "22%",
    marginRight: "2%",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 8,
  },
  moreExercisesText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  startWorkoutButton: {
    flexDirection: "row",
  },
});
