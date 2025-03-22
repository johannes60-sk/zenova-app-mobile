import { subDays } from "date-fns";
import { Workout } from "../types/home";

export const DAILY_WORKOUTS: { [dayKey: string]: Workout } = {
  Monday: {
    title: "Pull",
    exercises: [
      {
        id: 1,
        name: "Pull-ups",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 2,
        name: "Deadlift",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 3,
        name: "Bent Over Row",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 4,
        name: "Barbell Curl",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1677165733273-dcc3724c00e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Tuesday: {
    title: "Push",
    exercises: [
      {
        id: 1,
        name: "Bench Press",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 2,
        name: "Overhead Press",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 3,
        name: "Dips",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format",
      },
      {
        id: 4,
        name: "Tricep Extension",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1652363722833-509b3aac287b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Wednesday: {
    title: "Legs",
    exercises: [
      {
        id: 1,
        name: "Squats",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 2,
        name: "Lunges",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 3,
        name: "Leg Press",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 4,
        name: "Calf Raises",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Thursday: {
    title: "Core",
    exercises: [
      {
        id: 1,
        name: "Plank",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 2,
        name: "Russian Twists",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 3,
        name: "Leg Raises",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 4,
        name: "Bicycle Crunches",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1571019613576-2b22c76fd955?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Friday: {
    title: "Cardio",
    exercises: [
      {
        id: 1,
        name: "Running",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 2,
        name: "Cycling",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 3,
        name: "Jump Rope",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 4,
        name: "Burpees",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1739283180407-21e27d5c0735?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Saturday: {
    title: "Rest",
    exercises: [],
    mainImage:
      "https://images.unsplash.com/photo-1652363723178-12d9369c8474?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Sunday: {
    title: "Full Body",
    exercises: [
      {
        id: 1,
        name: "Burpees",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 2,
        name: "Mountain Climbers",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 3,
        name: "Jumping Jacks",
        image:
          "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=100&h=100&fit=crop&auto=format&auto=format",
      },
      {
        id: 4,
        name: "Push-ups",
        image:
          "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=100&h=100&fit=crop&auto=format&auto=format",
      },
    ],
    mainImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};

// Generate realistic workout data
export const generateWorkoutData = (period: string) => {
  const now = new Date();
  let data: { date: Date; duration: number }[] = [];

  const generateRealisticDuration = () => {
    // Most workouts are between 30-90 minutes
    const base = 30 + Math.floor(Math.random() * 60);
    // Sometimes add extra time for longer workouts
    const extra = Math.random() > 0.8 ? Math.floor(Math.random() * 60) : 0;
    return base + extra;
  };

  const shouldHaveWorkout = () => {
    // 70% chance of having a workout
    return Math.random() < 0.7;
  };

  switch (period) {
    case "Day":
      // Generate hourly data
      data = Array.from({ length: 24 }, (_, i) => {
        const date = new Date(now);
        date.setHours(date.getHours() - (23 - i));
        return {
          date,
          duration:
            i % 3 === 0 && shouldHaveWorkout()
              ? generateRealisticDuration()
              : 0,
        };
      });
      break;
    case "Week":
      // Generate daily data
      data = Array.from({ length: 7 }, (_, i) => ({
        date: subDays(now, 6 - i),
        duration: shouldHaveWorkout() ? generateRealisticDuration() : 0,
      }));
      break;
    case "Month":
      // Generate monthly data
      data = Array.from({ length: 30 }, (_, i) => ({
        date: subDays(now, 29 - i),
        duration: shouldHaveWorkout() ? generateRealisticDuration() : 0,
      }));
      break;
  }
  return data;
};
