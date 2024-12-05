import React, {useEffect, useState} from "react";
import './App.css'
import LineChart from "./components/LineChart";
import BarChart from './components/BarChart';
import ScatterChart from "./components/ScatterChart";
import BubbleChart from "./components/BubbleChart";

function App() {
  const [chartData, setChartData] = useState(null);//set use state

  useEffect(()=>{
    fetch('/financial_data.json')//fetch file check for errors
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
  },[]);

  if (!chartData){//loading when loading
    return <div>Loading...</div>
  }
  return(<div style={{textAlign: 'center'}}>
    <h1>Dynamic Charts</h1>
    <BarChart data={chartData}/>
    <LineChart data={chartData}/>
    <ScatterChart data={chartData}/>
    <BubbleChart data={chartData}/>
  </div>)
}

export default App
