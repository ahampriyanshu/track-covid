import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart = ({ graphData, value, index, country }) => {
    
    if(value !== index) return null;

    let dataset = [], title = '', isGraphDataArr = graphData && Array.isArray(graphData);

    // if(index === 0) {
    //     dataset = [{
    //         data: isGraphDataArr ? graphData.map(({ confirmed }) => confirmed) : [],
    //         label: 'Confirmed',
    //         borderColor: '#3333ff',
    //         fill: true
    //     }];
    //     title = `Daily Confirmed Cases Timeline`;
    // } else 
    if ((index === 0 || index === 1) && isGraphDataArr) {
        dataset = [{
            data: isGraphDataArr ? graphData.map(({ confirmed }) => confirmed) : [],
            label: 'Confirmed',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill: true
        }, {
            data: isGraphDataArr ? graphData.map(({ recovered }) => recovered) : [],
            label: 'Recovered',
            borderColor: 'rgba(0, 255, 0, 0.5)',
            fill: true
        }, {
            data: isGraphDataArr ? graphData.map(({ deaths }) => deaths) : [],
            label: 'Deceased',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
        }];
        title = `Daily Cases Timeline`;
    } else if (index === 2 && isGraphDataArr) {
        dataset = [{
            data: graphData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill: true
        }, {
            data: graphData.map(({ deaths }) => deaths),
            label: 'Deceased',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            fill: true
        }];
        title = `Daily Cases Growth`;
    } else if (index === 2 && !isGraphDataArr) {
        dataset = [{
            label: 'People',
            backgroundColor: [
                'rgba(0, 0, 255, 0.5)',
                'rgba(0, 255, 0, 0.5)',
                'rgba(255, 0, 0, 0.5)'],
            data: [graphData.confirmed.value, graphData.recovered.value, graphData.deaths.value]
        }];
        title = `Current status in ${country}`;
    }

    const lineChart = (
        graphData && graphData[0] ?
            <Line data={{
                labels: graphData.map(({ date }) => date),
                datasets: dataset
            }} 
            options={{
                title: { display: true, text: title }
            }}/> : null
    );

    const barChart = graphData && graphData.confirmed ?
        <Bar
            data={{
                labels: ['Confirmed', 'Recovered', 'Deceased'],
                datasets: dataset
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: title }
            }} /> : null;

    return (
        <div className="chart-container">
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;