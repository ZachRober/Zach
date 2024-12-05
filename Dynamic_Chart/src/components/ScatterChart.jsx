import React from "react";
import ChartComponent from "./ChartComponent";

const ScatterChart = ({ data }) => {//data passed as prop from json file in app
  const scatterChartData = {
    datasets: [
      {
        label: "Scatter Dataset",
        data: data.sales.map((value, index) => ({
          x: index + 1, 
          y: value, 
        })),
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  const scatterChartOptions = {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <ChartComponent type="scatter" data={scatterChartData} options={scatterChartOptions} />;//passing back as prop to chart component
};

export default ScatterChart;
