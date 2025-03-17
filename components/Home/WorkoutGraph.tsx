import React from "react";
import { View, Text, Dimensions } from "react-native";
import { LineChart, ruleTypes } from "react-native-gifted-charts";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

const screenWidth = Dimensions.get("window").width;

const data = [
  { value: 30, label: "Lun" },
  { value: 45, label: "Mar" },
  { value: 50, label: "Mer" },
  { value: 40, label: "Jeu" },
  { value: 60, label: "Ven" },
  { value: 70, label: "Sam" }, // Valeur max
  { value: 55, label: "Dim" },
];

const average = data.reduce((sum, d) => sum + d.value, 0) / data.length; // Moyenne

export const WorkoutGraph = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth * 0.9}
        height={250}
        isAnimated
        animationDuration={1000}
        animateOnDataChange
        hideRules={false}
        rulesColor={"#333333"}
        rulesThickness={0.5}
        rulesType={"solid"}
        yAxisOffset={0}
        xAxisThickness={0}
        yAxisThickness={0}
        yAxisLabelWidth={43}
        color={"#FFB300"}
        thickness={3}
        thickness1={3}
        curved
        hideDataPoints
        areaChart
        startFillColor={"rgba(255, 179, 0, 0.3)"}
        endFillColor={"rgba(255, 179, 0, 0.1)"}
        startOpacity={0.5}
        endOpacity={0.1}
        // lineGradient
        // lineGradientStartColor={"#FFB300"}
        // lineGradientEndColor={"#00B3CC"}
        yAxisTextStyle={{
          color: "#E0E0E0",
          fontSize: 12,
          opacity: 0.6,
          fontWeight: "600",
        }}
        xAxisLabelTextStyle={{
          color: "#E0E0E0",
          fontSize: 12,
          opacity: 0.6,
          fontWeight: "600",
        }}
        // formatYLabel={(label: string) => `${label} min`}
        yAxisLabelSuffix=" min"
        showVerticalLines={false}
        maxValue={80}
        stepValue={10}
        pointerConfig={{
          pointerStripHeight: 200,
          pointerStripColor: "rgba(255,255,255,0.5)",
          pointerColor: "#FFD700",
          showPointerStrip: true,
          // pointerLabelComponent: (items: any) => (
          //   <View
          //     style={{ backgroundColor: "#222", padding: 5, borderRadius: 5 }}
          //   >
          //     <Text style={{ color: "#FFD700" }}>{items[0].value} min</Text>
          //   </View>
          // ),
        }}
        // Ajout du point animé pour la valeur max
        // dataPoints={[
        //   {
        //     value: 70,
        //     color: '#FFD700',
        //     outerCircleColor: 'rgba(255, 215, 0, 0.3)',
        //     outerCircleWidth: 10,
        //     outerCircleBorderWidth: 2,
        //     focused: true,
        //   },
        // ]}
      />
    </View>
  );
};
