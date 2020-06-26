import React from 'react';
import { Pie } from 'react-chartjs-2';
import {  Typography } from '@material-ui/core';

const PieChart = ({ data, value, index }) => {
  if (value !== index) return null;

  const { confirmed, recovered, deaths } 
          = (data && index === 1 && data.totData) ? data.totData[0] : data;

  if (!confirmed) {
      return (<Typography variant="button" display="block" align='center'>
                  Loading...
              </Typography>);
  }

    const pieChart = (
      confirmed 
        ? (
        <Pie
          data={{
            labels: ['Ongoing', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People', 
                backgroundColor: [
                  'rgba(0, 0, 255, 0.5)',
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
                ],
                data:[confirmed.value - ( recovered.value + deaths.value ), recovered.value, deaths.value]
              }]
          }}
          options={{
            responsive: true,
            maintainAspectRatio: true,
          }}
        />
      ) : null
      );

      return(
        <div>
        { pieChart }
        </div>
    )
    }

export default PieChart;
