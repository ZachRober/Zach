import React from "react";
import ChartComponent from "./ChartComponent";

const BubbleChart = ({ data }) => {//data passed as prop from json file in app
  const bubbleChartData = {
    datasets: [
      {
        label: "Bubble Dataset",
        data: data.sales.map((value, index) => ({//describe colors for data
          x: index + 1, 
          y: value, 
          r: value / 10, 
        })),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const bubbleChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;//passing back as prop to chart component
};

export default BubbleChart;
