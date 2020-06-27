import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import Rotating from '../Rotating/Rotating.jsx';
import './Cards.css';
import { Pie } from 'react-chartjs-2';

const Cards = ({ data, value, index }) => {
    if (value !== index) return null;

    const { confirmed, recovered, deaths, lastUpdate, deltaconfirmed, deltadeaths, deltarecovered } 
            = (data && index === 1 && data.totData) ? data.totData[0] : data;

    if (!confirmed) {
        return (<Rotating />);
    }

    const lastUpdated = lastUpdate ? (<Typography  variant="caption" display="block" align='center'>
            Last Updated at {new Date(lastUpdate).toLocaleString()} IST
        </Typography>) : null;

const stillActive = confirmed ? (<Typography className='active' variant="h6" display="block" align='center'>
Active Cases left { (confirmed.value - ( recovered.value + deaths.value )).toLocaleString() } 
</Typography>) : null;

const pieChart = (
    confirmed 
      ? (
      <Pie
        data={{
          labels: ['Active', 'Recovered', 'Deaths'],
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
      />
    ) : null
    );


    return (
        <div className="card-container">
            <Grid container spacing={3} justify="center" className="grid-container">
                <Grid item component={Card} xs={3} md={3} className="card-card card-infected">
                    <CardContent align='center' className="card-content">
                        <Typography className="card-heading">Confirmed</Typography>
                        <Typography variant="h3" className="card-data">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        {deltaconfirmed > 0 ? <Typography variant='h5' className="card-delta" >+{deltaconfirmed}</Typography> : null}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} md={3} className="card-card card-recovered">
                    <CardContent align='center'>
                        <Typography className="card-heading">Recovered</Typography>
                        <Typography variant="h3" className="card-data">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        {deltarecovered > 0 ? <Typography variant='h5' className="card-delta" >+{deltarecovered}</Typography>  : null}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} md={3} className="card-card card-deaths">
                    <CardContent align='center'>
                        <Typography className="card-heading">Deceased</Typography>
                        <Typography variant="h3" className="card-data">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        {deltadeaths > 0 ? <Typography variant='h5' className="card-delta" >+{deltadeaths}</Typography> : null}
                    </CardContent>
                </Grid>
            </Grid>
            <Grid container  justify="center" >
            <Grid item  xs={12} md={4} >
            { pieChart }
            </Grid>
            </Grid>
            <br />
            {stillActive}
            {lastUpdated}
        </div>
    );
}

export default Cards;