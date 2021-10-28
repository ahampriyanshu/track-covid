import React from 'react';
import {Line, Bar} from 'react-chartjs-2';
import './Chart.css';

const lastUpdated = new Date().toLocaleDateString();

const Chart = ({graphData, value, index, country}) => {
  if (value !== index) return null;
  let dataset = [],
    title = '',
    isGraphDataArr = graphData && Array.isArray(graphData);

  if ((index === 0 || index === 1) && isGraphDataArr) {
    dataset = [
      {
        data: isGraphDataArr ? graphData.map(({confirmed}) => confirmed) : [],
        label: 'Confirmed',
        borderColor: 'rgba(187, 134, 252, 1)',
        fill: false,
      },
      {
        data: isGraphDataArr ? graphData.map(({recovered}) => recovered) : [],
        label: 'Recovered',
        borderColor: 'rgba(0, 255, 0, 0.7)',
        fill: false,
      },
      {
        data: isGraphDataArr ? graphData.map(({deaths}) => deaths) : [],
        label: 'Deceased',
        borderColor: 'rgba(255, 0, 0, 0.7)',
        fill: false,
      },
    ];
    title = `Last updated on ${lastUpdated}`;
  } else if (index === 2 && isGraphDataArr) {
    dataset = [
      {
        data: graphData.map(({confirmed}) => confirmed),
        label: 'Confirmed',
        borderColor: 'rgba(187, 134, 252, 1)',
        fill: true,
        backgroundColor: 'rgba(187, 134, 252, 0.2)',
      },
      {
        data: graphData.map(({recovered}) => recovered),
        label: 'Recovered',
        borderColor: 'rgba(0, 255, 0, 0.5)',
        fill: true,
        backgroundColor: 'rgba(0, 255, 0, 0.8)',
      },
      {
        data: graphData.map(({deaths}) => deaths),
        label: 'Deceased',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        fill: true,
        backgroundColor: 'rgba(255, 0, 0, 1.0)',
      },
    ];
    title = `Last updated on ${lastUpdated}`;
  } else if (index === 2 && !isGraphDataArr) {
    dataset = [
      {
        label: 'Cases',
        backgroundColor: [
          'rgba(187, 134, 252, 0.7)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)',
        ],
        data: [
          graphData.confirmed.value,
          graphData.recovered.value,
          graphData.deaths.value,
        ],
      },
    ];
    title = `Last updated on ${lastUpdated}`;
  }

  const lineChart =
    graphData && graphData[0] ? (
      <Line
        data={{
          labels: graphData.map(({date}) => date),
          datasets: dataset,
        }}
        options={{
          title: {display: true, text: title},
          responsive: true,
          maintainAspectRatio: true,
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                  display: false,
                  drawBorder: false,
                  zeroLineWidth: 0,
                },
                ticks: {
                  display: false,
                  autoSkip: true,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                  display: false,
                  drawBorder: false,
                  zeroLineWidth: 0,
                },
                ticks: {
                  display: false,
                  autoSkip: true,
                },
              },
            ],
          },
          elements: {
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 5,
            },
          },
        }}
      />
    ) : null;

  const barChart =
    graphData && graphData.confirmed ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deceased'],
          datasets: dataset,
        }}
        options={{
          legend: {display: false},
          title: {display: true, text: title},
          scales: {
            xAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                  drawBorder: false,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  drawOnChartArea: false,
                  drawBorder: false,
                },
              },
            ],
          },
        }}
      />
    ) : null;

  return (
    <div className="chart-container">{country ? barChart : lineChart}</div>
  );
};

export default React.memo(Chart);
