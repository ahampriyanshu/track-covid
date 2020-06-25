import React, { useState, useEffect } from 'react';
import { fetchDailyData } from '../../api';
import { Pie } from 'react-chartjs-2';

const PieChart = ({data : {confirmed, deaths, recovered}, country}) => {
    const [dailyData, setDailyData] = useState([]);
  
    useEffect(() => {
      const fetchAPI = async () => {
        setDailyData(await fetchDailyData());
      }
  
      fetchAPI();
    },[]);
  
    const barChart = (
      dailyData.length 
        ? (
        <Pie
          data={{
            labels: ['Infected', 'Recovered', 'Deaths'],
            datasets: [{
                label: 'People', 
                backgroundColor: [
                  'rgba(0, 0, 255, 0.5)',
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
                ],
                data:[confirmed.value, recovered.value, deaths.value]
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
        { barChart }
        </div>
    )
    }

export default PieChart;
