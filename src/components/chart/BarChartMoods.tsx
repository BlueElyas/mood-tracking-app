import { VictoryBar, VictoryChart, VictoryTheme } from "victory";
import { moodMap, type MoodKey } from "./constants";

// Sample sleep data
const sleepData: {
  date: string;
  hours: number;
  mood: MoodKey;
}[] = [
  { date: "1st Aug", hours: 5, mood: "Sad" },
  { date: "2nd Aug", hours: 7, mood: "Neutral" },
  { date: "3rd Aug", hours: 8, mood: "Very Happy" },
  { date: "4th Aug", hours: 4, mood: "Very Sad" },
  { date: "5th Aug", hours: 6, mood: "Happy" },
];

// Transform for Victory
const chartData = sleepData.map((entry) => ({
  x: entry.date,
  y: entry.hours,
  fill: moodMap[entry.mood].color,
  // label: moodMap[entry.mood].emoji, // optional, if you want emoji as label
  topRight: "5px",
  topLeft: "full",
}));

export default function BarChartMoods() {
  return (
    <VictoryChart domainPadding={{ x: 20 }} theme={VictoryTheme.clean}>
      <VictoryBar
        data={chartData}
        style={{
          data: {
            fill: ({ datum }) => datum.fill,
          },
          labels: {
            fontSize: 20,
          },
        }}
        // labels={({ datum }) => datum.label} // shows emoji above bar
        cornerRadius={{
          topLeft: 10,
          topRight: 10,
        }}
      />
    </VictoryChart>
  );
}
