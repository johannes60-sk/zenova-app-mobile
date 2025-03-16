import { ArrowRight } from "lucide-react-native";
import { useState } from "react";
import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

export const WorkoutTime = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Day");
  const periods = ["Day", "Week", "Month"];

  return (
    <View style={styles.workoutTimeSection}>
      <View style={styles.workoutTimeHeader}>
        <Text style={styles.workoutTimeTitle}>Workout time</Text>
        <TouchableOpacity style={styles.statsButton}>
          <Text style={styles.statsButtonText}>My statistics</Text>
          <ArrowRight color="#FFFFFF" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.timeDisplay}>
        <Text style={styles.timeValue}>0 min</Text>
        <ArrowRight color="#FFFFFF" size={20} />
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

      <View style={styles.graph}>
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
  workoutTimeTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
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
    color: "#FFFFFF",
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
    backgroundColor: "#FFD700",
  },
  periodButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  periodButtonTextActive: {
    color: "#000000",
  },

  graph: {
    height: 200,
    marginTop: 20,
  },
  graphLine: {
    position: "absolute",
    width: "100%",
    height: 2,
    backgroundColor: "#FFD700",
    top: "50%",
  },
  graphMarker: {
    position: "absolute",
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: "#FFD700",
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
    color: "#666666",
    fontSize: 12,
  },
});
