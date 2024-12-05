import React from "react";
import ChartComponent from "./ChartComponent";

const LineChart = ({ data }) => {//data passed as prop from json file in app
  const lineChartData = {
    labels: data.months,
    datasets: [
      {
        label: "Monthly Sales",
        data: data.sales,
        fill: false,
        borderColor: "rgba(153, 102, 255, 1)",
        tension: 0.1,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Line Chart",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="line" data={lineChartData} options={lineChartOptions} />;//passing back as prop to chart component
};

export default LineChart;
