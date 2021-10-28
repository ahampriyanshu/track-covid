import Rotating from '../Rotating/Rotating.jsx';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import React from 'react';
import {Pie} from 'react-chartjs-2';
import CountUp from 'react-countup';

import './Cards.css';

const Cards = ({data, value, index}) => {
  if (value !== index) return null;
  const {
    confirmed,
    recovered,
    deaths,
    deltaconfirmed,
    deltadeaths,
    deltarecovered,
  } = data && index === 1 && data.totData ? data.totData[0] : data;

  if (!confirmed) return <Rotating />;

  const pieChart = confirmed ? (
    <Pie
      data={{
        labels: ['Active', 'Recovered', 'Deaths'],
        datasets: [
          {
            label: 'People',
            backgroundColor: [
              'rgba(187, 134, 252, 1)',
              'rgba(0, 255, 0, 0.5)',
              'rgba(255, 0, 0, 0.5)',
            ],
            data: [
              confirmed.value - (recovered.value + deaths.value),
              recovered.value,
              deaths.value,
            ],
            borderColor: [
              'rgba(187, 134, 252, 0.2)',
              'rgba(0, 255, 0, 0.2)',
              'rgba(255, 0, 0, 0.2)',
            ],
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className="card-container">
      <Grid container spacing={3} justify="center" className="grid-container">
        <Grid
          item
          component={Card}
          xs={3}
          md={2}
          className="card-card card-infected"
        >
          <CardContent align="center" className="card-content">
            <Typography className="card-heading">Confirmed</Typography>
            <Typography variant="h4" className="card-data">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={1}
                separator=","
              />
            </Typography>
            {deltaconfirmed > 0 ? (
              <Typography variant="h5" className="card-delta">
                +{deltaconfirmed}
              </Typography>
            ) : null}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={3}
          md={2}
          className="card-card card-recovered"
        >
          <CardContent align="center">
            <Typography className="card-heading">Recovered</Typography>
            <Typography variant="h4" className="card-data">
              <CountUp
                start={0}
                end={recovered.value}
                duration={1}
                separator=","
              />
            </Typography>
            {deltarecovered > 0 ? (
              <Typography variant="h5" className="card-delta">
                +{deltarecovered}
              </Typography>
            ) : null}
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={3}
          md={2}
          className="card-card card-deaths"
        >
          <CardContent align="center">
            <Typography className="card-heading">Deceased</Typography>
            <Typography variant="h4" className="card-data">
              <CountUp
                start={0}
                end={deaths.value}
                duration={1}
                separator=","
              />
            </Typography>
            {deltadeaths > 0 ? (
              <Typography variant="h5" className="card-delta">
                +{deltadeaths}
              </Typography>
            ) : null}
          </CardContent>
        </Grid>
      </Grid>
      <br />
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          {pieChart}
        </Grid>
      </Grid>
    </div>
  );
};

export default React.memo(Cards);
