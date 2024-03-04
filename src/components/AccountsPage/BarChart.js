import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      // text: "Chart.js Bar Chart - Stacked",
    },
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      align: "top",
      //   formatter: (value, context) => context.dataset.data[context.dataIndex],
      //   color: "white",
      font: {
        weight: "bold",
      },
      color: function (context) {
        return context.active ? "#000" : "white";
      },
    },
  },
  responsive: true,
  scales: {
    x: {
      //   display: false,
      grid: {
        display: false, //Remove Grid Lines for x-axis
      },
      // stacked: true,
    },
    y: {
      display: false,
      grid: {
        display: false, //Remove Grid Lines for y-axis
      },
      // stacked: true,
    },
  },
  maintainAspectRatio: false, // Add this line to allow setting width and height directly
  // width: 100, // Set the width of the chart
  // height: 500, // Set the height of the chart
  // plugins: {
  //   tooltip: {
  //     enabled: false, // Hide tooltips
  //   },
  //   datalabels: {
  //     display: false, // Hide data labels
  //   },
  // },
};

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1", // to Remove this i Setted display : false
      data: [480, 350, 340, 480, 115, 390, 400],
      backgroundColor: "rgb(45,96,255)",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      barPercentage: 0.9,
      categoryPercentage: 0.4,
      // barThickness: 6,
      // maxBarThickness: 8,
      // minBarLength: 5,
    },
    {
      // label: "Dataset 2",   // to Remove this i Setted display : false
      // label: "Fully Rounded",
      data: [220, 115, 290, 380, 215, 210, 310],
      backgroundColor: "#FCAA0B",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      barPercentage: 0.9,
      categoryPercentage: 0.4,
      // barThickness: 6,
      // maxBarThickness: 8,
      // minBarLength: 5,
    },
  ],
};

export default function BarChart() {
  return (
    <Bar
      style={{ height: "100%", width: "100%" }}
      options={options}
      data={data}
    />
  );
}
