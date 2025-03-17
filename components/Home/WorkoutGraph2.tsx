// import React from 'react';
// import { View, Text, Dimensions } from 'react-native';
// import { LineChart } from 'react-native-svg-charts';
// import { Defs, LinearGradient, Stop } from 'react-native-svg';

// const formatDuration = (value: number) => {
//   if (value >= 60) {
//     const hours = Math.floor(value / 60);
//     const minutes = value % 60;
//     return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
//   }
//   return `${value}m`;
// };

// const data = [
//   { x: "Lun", y: 30 },
//   { x: "Mar", y: 45 },
//   { x: "Mer", y: 50 },
//   { x: "Jeu", y: 40 },
//   { x: "Ven", y: 60 },
//   { x: "Sam", y: 70 },
//   { x: "Dim", y: 55 },
// ];

// const WorkoutGraph = () => {
//   const screenWidth = Dimensions.get('window').width;

//   return (
//     <View style={{ flex: 1, padding: 20, backgroundColor: '#121212', borderRadius: 10 }}>
//       <LineChart
//         style={{ height: 220 }}
//         data={data.map(item => item.y)}
//         svg={{
//           strokeWidth: 4,
//           stroke: 'url(#gradient)',  // Apply gradient color to the line
//         }}
//         contentInset={{ top: 20, bottom: 20 }}
//       >
//         <Defs>
//           <LinearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//             <Stop offset="0%" stopColor="rgba(255, 87, 34, 1)" />
//             <Stop offset="100%" stopColor="rgba(33, 150, 243, 1)" />
//           </LinearGradient>
//         </Defs>
//       </LineChart>
//     </View>
//   );
// };

// export default WorkoutGraph;
