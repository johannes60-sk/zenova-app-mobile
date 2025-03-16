import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  useWindowDimensions,
} from "react-native";
import "./../styles/global.css";
import { format } from "date-fns";
import { Header } from "@/components/Home/CustomHeader";
import { WeekProgress } from "@/components/Home/WeekProgress";
import { WorkoutTime } from "@/components/Home/WorkoutTime";
import { WorkoutCard } from "@/components/Home/WorkoutCard";
import { DailyWorkout } from "@/components/Home/DailyWorkout";

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <WeekProgress selectedDay={selectedDay} onSelectDay={setSelectedDay} />
        <DailyWorkout day={selectedDay} />
        <WorkoutTime />
        <View style={styles.workoutsSection}>
          <Text style={styles.workoutTimeTitle}>Start Workout</Text>

          <WorkoutCard
            title="Pull"
            exercises={5}
            imageUrl="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500"
          />
          <WorkoutCard
            title="Push"
            exercises={4}
            imageUrl="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500"
          />
          <WorkoutCard
            title="Legs"
            exercises={5}
            imageUrl="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  scrollView: {
    flex: 1,
  },
  workoutsSection: {
    padding: 20,
  },
  workoutTimeTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
});
