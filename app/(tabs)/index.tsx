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
import { Container, SectionTitle } from "../styles/custom-component";
import { theme } from "../styles/theme";
import { ThemeProps, ThemeProvider } from "styled-components/native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Importez GestureHandlerRootView

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());

  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Container>
          <Header />
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            <WeekProgress
              selectedDay={selectedDay}
              onSelectDay={setSelectedDay}
            />
            <DailyWorkout day={selectedDay} />
            <WorkoutTime />
            <View style={styles.workoutsSection}>
              <View style={{ marginBottom: 20 }}>
                <SectionTitle>Start Workout</SectionTitle>
              </View>

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
        </Container>
      </ThemeProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  scrollView: {
    flex: 1,
  },
  workoutsSection: {
    padding: 20,
  },
});
