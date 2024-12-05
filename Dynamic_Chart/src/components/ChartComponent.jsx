import React, {useEffect, useRef} from "react";
import { Chart } from "chart.js/auto";


function ChartComponent({data, type, options}){//passed data types as props
const chartRef = useRef(null);
const chartInstanceRef = useRef(null);

useEffect(()=>{
    const ctx = chartRef.current.getContext('2d');

if (chartInstanceRef.current){
    chartInstanceRef.current.destroy();
}
chartInstanceRef.current = new Chart(ctx, {
    type, data, options,//building the charts based on data given for each chart
});
return () =>{
    if (chartInstanceRef.current){
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
    }
};
},[data, type, options]);
return <canvas ref={chartRef}></canvas>

}
export default ChartComponent;