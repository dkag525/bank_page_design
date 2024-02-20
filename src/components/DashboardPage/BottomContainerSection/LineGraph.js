import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "",
      display: false,
    },
    title: {
      display: false,
    },
    // filler: {
    //   propogate: false,
    // },
  },
  scales: {
    x: {
      grid: {
        display: true, //Remove Grid Lines for x-axis
      },
      // stacked: true,
    },
    y: {
      grid: {
        display: true, //Remove Grid Lines for y-axis
        // color: "red", // Set grid line color
        // borderDash: [2, 2], // Set border dash style [length of dash, length of space]
      },
      // stacked: true,
    },
  },
  maintainAspectRatio: false, // Set this to false to allow custom width and height
  // width: 100, // Set the width of the chart
  // height: 300, // Set the height of the chart
};

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"];

export const data = {
  labels,
  datasets: [
    {
      fill: {
        target: "origin",
        // above: "red",
      },
      //   label: 'Dataset 2',
      data: [100, 250, 210, 420, 400, 710, 200, 480, 210, 600, 590],
      borderColor: "blue",
      //   backgroundColor: "rgba(53, 162, 235, 0.5)",
      cubicInterpolationMode: "monotone", // Set the interpolation mode to 'monotone'
      borderWidth: 4, // Set the border width to make it bold
      backgroundColor: "rgba(39, 50, 176, 0.26)",
      radius: 0,
    },
  ],
};

export function LineChart() {
  return (
    <Line
      style={{ width: "100%", height: "100%" }}
      options={options}
      data={data}
    />
  );
}
