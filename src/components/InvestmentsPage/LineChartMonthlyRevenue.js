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
  scales: {
    x: {
      grid: {
        display: false, //Remove Grid Lines for x-axis
        // borderDash: [2, 2],
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

const labels = [2016, 2017, 2018, 2019, 2020, 2021];

export const data = {
  labels,
  datasets: [
    {
      fill: {
        target: "origin",
        // above: "red",
      },
      //   label: 'Dataset 2',
      data: [0, 5000, 23000, 18000, 38000, 22000, 30000],
      borderColor: "#16DBCC",
      backgroundColor: "transparent",
      cubicInterpolationMode: "monotone", // Set the interpolation mode to 'monotone'
      borderWidth: 5, // Set the border width to make it bold
      // backgroundColor: "rgba(39, 50, 176, 0.26)",
      radius: 0,
    },
  ],
};

export default function LineChartMonthlyRevenue() {
  return (
    <Line
      style={{ width: "100%", height: "50%" }}
      options={options}
      data={data}
    />
  );
}
