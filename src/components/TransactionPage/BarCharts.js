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
      // text: "Chart.js Bar Chart - Stacked",
    },
    datalabels: {
      anchor: "end",
      align: "top",
      formatter: (value, context) => context.dataset.data[context.dataIndex],
      color: "#000",
      font: {
        weight: "bold",
      },
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
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
};

const labels = ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

export const data = {
  labels,
  datasets: [
    {
      // label: "Dataset 1", // to Remove this i Setted display : false
      data: [480, 350, 340, 480, 115, 390, 400],
      backgroundColor: "#EDF0F7",
      hoverBackgroundColor: "#16DBCC",
      borderWidth: 1,
      borderRadius: 10,
      borderSkipped: false,
      barPercentage: 1.7,
      categoryPercentage: 0.4,
      // barThickness: 6,
      // maxBarThickness: 8,
      // minBarLength: 5,
    },
  ],
};

export function BarChart() {
  return (
    <Bar
      style={{ height: "100%", maxWidth: "100%", minWidth: "10%" }}
      options={options}
      data={data}
    />
  );
}
