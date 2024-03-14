import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["green", "pink", "Yellow", "blue"],
  datasets: [
    {
      //   label: "# of Votes",
      data: [12, 12, 12, 12],
      backgroundColor: ["#16DBCC", "#FF82AC", "#FFBB38", "#4C78FF"],
      Offset: 15, // Additional spacing on hover
      //   borderAlign: "inner",
      //   borderDash: [2],
      //   circumference: 350,
      //   spacing: 15,
      //   borderColor: [
      //     "rgba(255, 99, 132, 1)",
      //     "rgba(54, 162, 235, 1)",
      //     "rgba(255, 206, 86, 1)",
      //     "rgba(75, 192, 192, 1)",
      //     "rgba(153, 102, 255, 1)",
      //     "rgba(255, 159, 64, 1)",
      //   ],
      //   borderWidth: 1,
    },
  ],
};

export const options = {
  plugins: {
    legend: {
      display: true,
      position: "",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          const label = context.label || "";
          const value = context.parsed || 0;
          return `${label}: ${value}%`;
        },
      },
    },
    datalabels: {
      color: "transparent", // Font color for the values
      anchor: "center", // Position of the values inside the pie chart
      align: "end", // Alignment of the values inside the pie chart

      font: {
        size: 10,
        // weight: "bolder",
        // family: "mono",
      }, // Font size for the values
      offset: -17, // Offset from the data point
      rotation: 15, // Rotation angle in degrees
      clamp: true, // Ensure labels do not overflow
      formatter: (value, context) => {
        return [context.chart.data.labels[context.dataIndex], value + "%"];
      },
      // backgroundColor: "red", // Background color for the data labels
      // borderRadius: 5, // Border radius for the data labels
      // borderWidth: 1, // Border width for the data labels
      // borderColor: "green", // Border color for the data labels
      clip: true, // Clips the data labels to the chart area
      // zIndex: 1, // Z-index of the data labels
    },
  },
  // elements: {
  //   arc: {
  //     borderWidth: 1,
  //     borderColor: "green",
  //     innerRadius: 0, // Inner radius for a doughnut chart
  //   },
  // },
  // hover: {
  //   mode: "single", // Hover mode for the chart
  // },
  animation: {
    animateRotate: true, // Animate rotation during initial rendering
    animateScale: true, // Animate scaling during initial rendering
  },

  rotation: 5 * Math.PI, // Rotate pie chart by 90 degrees
  circumference: 115 * Math.PI, // Full circumference
  cutout: 45, // Create a doughnut chart with a center hole
};

export default function App() {
  return <Doughnut data={data} options={options} />;
}
