import React from 'react';
import { Line, Bar } from 'react-chartjs-2';

import './Chart.css';

const Chart = ({ graphData, value, index, country }) => {
    
    if(value !== index) return null;

    let dataset = [], title = '', isGraphDataArr = graphData && Array.isArray(graphData);

    if ((index === 0 || index === 1) && isGraphDataArr) {
        dataset = [{
            data: isGraphDataArr ? graphData.map(({ confirmed }) => confirmed) : [],
            label: 'Confirmed',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill: false
        }, {
            data: isGraphDataArr ? graphData.map(({ recovered }) => recovered) : [],
            label: 'Recovered',
            borderColor: 'rgba(0, 255, 0, 0.5)',
            fill: false
        }, {
            data: isGraphDataArr ? graphData.map(({ deaths }) => deaths) : [],
            label: 'Deceased',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            fill: false
        }];
        title = `Daily Cases Timeline`;
    } else if (index === 2 && isGraphDataArr) {
        dataset = [{
            data: graphData.map(({ confirmed }) => confirmed),
            label: 'Confirmed',
            borderColor: 'rgba(0, 0, 255, 0.5)',
            fill: true,
            backgroundColor:'rgba(0, 0, 255, 0.4)'
        }, {
            data: graphData.map(({ deaths }) => deaths),
            label: 'Deceased',
            borderColor: 'rgba(255, 0, 0, 1)',
            fill: true,
            backgroundColor:'rgba(255, 0, 0, 1)'
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
                datasets: dataset,
            }} 
            options={{
                title: { display: true, text: title },
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                            display:false,
                            drawBorder:false,
                            zeroLineWidth:0
                        },
                        ticks: {
                            display: false,
                            autoSkip: true
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                            display:false,
                            drawBorder:false,
                            zeroLineWidth:0
                        },
                        ticks: {
                            display: false,
                            autoSkip: true
                        }
                    }]
                },
                elements: { 
                    point: { 
                      radius: 0,
                      hitRadius: 10, 
                      hoverRadius: 5,
                    } 
                  } 
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
                title: { display: true, text: title },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                            drawBorder:false,
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            drawOnChartArea: false,
                            drawBorder:false,
                        }
                    }]
                },
            }} /> : null;

    return (
        <div className="chart-container">
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;