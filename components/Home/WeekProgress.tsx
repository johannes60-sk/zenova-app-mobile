import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { format } from "date-fns";

type WeekProgressProps = {
  selectedDay: number;
  onSelectDay: React.Dispatch<React.SetStateAction<number>>;
};

// Utilisez des identifiants uniques pour chaque jour
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const today = new Date();

export const WeekProgress = ({
  selectedDay,
  onSelectDay,
}: WeekProgressProps) => {
  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - today.getDay() + 1); // Start from Monday

  return (
    <View style={styles.weekSection}>
      <View style={styles.weekHeader}>
        <Text style={styles.weekTitle}>This week</Text>
        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statLabel}>Activities</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statValue}>00:00</Text>
            <Text style={styles.statLabel}>Time</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start a workout</Text>
      </TouchableOpacity>

      <View style={styles.calendar}>
        {DAYS.map((day, index) => {
          const date = new Date(startOfWeek);
          date.setDate(startOfWeek.getDate() + index);
          const dayNumber = format(date, "d");
          const isSelected = selectedDay === index;
          const isPast = date < today;
          const isFuture = date > today;

          return (
            <TouchableOpacity
              key={`${day}-${index}`}
              style={styles.calendarDayContainer}
              onPress={() => onSelectDay(index)}
            >
              <View
                style={[
                  styles.calendarDayCircle,
                  isSelected && styles.calendarDayCircleSelected,
                  isPast && styles.calendarDayCirclePast,
                  isFuture && styles.calendarDayCircleFuture,
                ]}
              >
                <Text
                  style={[
                    styles.calendarDayText,
                    isSelected && styles.calendarDayTextSelected,
                  ]}
                >
                  {day}
                </Text>
              </View>
              <Text
                style={[
                  styles.calendarDate,
                  isSelected && styles.calendarDateSelected,
                  isFuture && styles.calendarDateFuture,
                ]}
              >
                {dayNumber}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekSection: {
    padding: 20,
  },
  weekHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  weekTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  stats: {
    flexDirection: "row",
  },
  stat: {
    marginLeft: 20,
    alignItems: "center",
  },
  statValue: {
    color: "#FFFFFF",
    fontSize: 18,
  },
  statLabel: {
    color: "#666666",
    fontSize: 14,
  },
  startButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    padding: 15,
    alignItems: "center",
    marginVertical: 20,
  },

  startButtonText: {
    color: "#000000",
    fontSize: 18,
    fontWeight: "bold",
  },

  calendarDayContainer: {
    alignItems: "center",
  },

  calendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  calendarDay: {
    alignItems: "center",
  },
  calendarDayCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderStyle: "dashed",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  calendarDayCircleSelected: {
    backgroundColor: "#FFFFFF",
    borderStyle: "solid",
  },
  calendarDayCirclePast: {
    borderColor: "#666666",
  },
  calendarDayCircleFuture: {
    borderColor: "#333333",
  },
  calendarDayText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
  },
  calendarDayTextSelected: {
    color: "#000000",
  },
  calendarDate: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarDateSelected: {
    color: "#FFFFFF",
  },
  calendarDateFuture: {
    color: "#666666",
  },
  workoutTimeSection: {
    padding: 20,
  },
  calendarDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#333333",
    marginVertical: 5,
  },
  calendarDotActive: {
    backgroundColor: "#FFEB3B",
  },
});
