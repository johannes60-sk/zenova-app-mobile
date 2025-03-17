// export type Exercise = {
//     name: string;
//     reps: number;
//     muscles: string;
//   };

//   export type WorkoutCardProps = {
//     exercises?: Exercise[];
//     calories?: number;
//   };

export type Exercices = {
  id: number;
  name: string;
  image: string;
};

export type Workout = {
  title: string;
  exercises: Exercices[];
  mainImage: string;
};
