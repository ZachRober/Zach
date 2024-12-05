import ChartComponent from "./ChartComponent";

const BarChart = ({data})=>{//data passed as prop from json file in app
    const barChartData = {
        labels: data.months,
        datasets: [
            {
                label: 'Monthly Sales',
                data: data.sales,//setting parameters for my bar chart
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75,192,1921,1)',
                borderWidth: 1,
            },
        ],
    };
    const barChartOptions = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };
    return <ChartComponent type="bar" data={barChartData} options={barChartOptions}/>//passing back as a prop to Chart Component
}
export default BarChart