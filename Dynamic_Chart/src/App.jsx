import {Chart} from 'chart.js';
import React, {useEffect, useRef, useState} from "react";
import './App.css'
import ChartComponent from './components/ChartComponent';

function App() {
  const [chartData, setChartData] = useState(null);

  useEffect(()=>{
    fetch('./downloads/financial_data.json')
    .then((response)=>{
      if(!response.ok){
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
     .then((data)=>{
      setChartData(data);
     })
     .catch((error)=>{
      console.error(error);
     });
  },[])
  return(<div>
    <h1>Charts</h1>
    <ChartComponent data={chartData}/>
  </div>)
}

export default App
