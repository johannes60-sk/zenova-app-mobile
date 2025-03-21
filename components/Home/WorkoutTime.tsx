import { generateWorkoutData } from "@/app/const/home";
import { SectionTitle } from "@/app/styles/custom-component";
import { useEffect, useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { WorkoutGraph } from "./WorkoutGraph";

export const WorkoutTime = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Day");
  const periods = ["Day", "Week", "Month"];
  const [workoutData, setWorkoutData] = useState(generateWorkoutData("Day"));
  const totalDuration = workoutData.reduce(
    (sum, data) => sum + data.duration,
    0
  );

  const formatTotalDuration = (minutes: number) => {
    if (minutes >= 60) {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      return `${hours}h${remainingMinutes > 0 ? ` ${remainingMinutes}m` : ""}`;
    }
    return `${minutes} min`;
  };

  useEffect(() => {
    setWorkoutData(generateWorkoutData(selectedPeriod));
  }, [selectedPeriod]);

  return (
    <View style={styles.workoutTimeSection}>
      <View style={styles.workoutTimeHeader}>
        <SectionTitle>Workout time</SectionTitle>
        <TouchableOpacity style={styles.statsButton}>
          <Text style={styles.statsButtonText}>My statistics</Text>
          <Icon name="arrow-forward-outline" color="#FFFFFF" size={18} />
        </TouchableOpacity>
      </View>

      <View style={styles.timeDisplay}>
        <Text style={styles.timeValue}>
          {formatTotalDuration(totalDuration)}
        </Text>
        <Icon
          name="stats-chart-outline"
          color="#00B3CC"
          className="mt-1"
          size={20}
        />
      </View>

      <View style={styles.periodSelector}>
        {periods.map((period) => (
          <TouchableOpacity
            key={period}
            style={[
              styles.periodButton,
              selectedPeriod === period && styles.periodButtonActive,
            ]}
            onPress={() => setSelectedPeriod(period)}
          >
            <Text
              style={[
                styles.periodButtonText,
                selectedPeriod === period && styles.periodButtonTextActive,
              ]}
            >
              {period}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* <View style={styles.graph}>
        <View style={styles.graphLine} />
        <View style={styles.graphMarker} />
        <View style={styles.graphDays}>
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <Text key={day} style={styles.graphDayText}>
              {day}
            </Text>
          ))}
        </View>
        <View style={styles.timeLabels}>
          <Text style={styles.timeLabel}>0 min</Text>
          <Text style={styles.timeLabel}>0 min</Text>
          <Text style={styles.timeLabel}>0 min</Text>
        </View>
      </View> */}
      <View style={styles.graph}>
        <WorkoutGraph />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  workoutTimeSection: {
    padding: 20,
  },
  workoutTimeHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  statsButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  statsButtonText: {
    color: "#FFFFFF",
    marginRight: 5,
  },
  timeDisplay: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  timeValue: {
    color: "#00B3CC",
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic",
    marginRight: 10,
  },
  periodSelector: {
    flexDirection: "row",
    marginBottom: 30,
    backgroundColor: "#333333",
    borderRadius: 25,
    padding: 4,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    alignItems: "center",
    borderRadius: 20,
  },
  periodButtonActive: {
    backgroundColor: "#00B3CC",
  },
  periodButtonText: {
    color: "#E0E0E0",
    fontSize: 16,
  },
  periodButtonTextActive: {
    color: "#121212",
  },

  graph: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    padding: 0,
  },
  graphLine: {
    position: "absolute",
    width: "100%",
    height: 2,
    backgroundColor: "#00B3CC",
    top: "50%",
  },
  graphMarker: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#00BFA6",
    top: "50%",
    left: "50%",
    marginTop: -8,
    marginLeft: -8,
  },
  graphDays: {
    flexDirection: "row",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  graphDayText: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  timeLabels: {
    position: "absolute",
    right: -50,
    height: "100%",
    justifyContent: "space-between",
  },
  timeLabel: {
    color: "#E0E0E0",
    fontSize: 12,
  },
});
