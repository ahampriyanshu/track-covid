import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import './Cards.css';

const Cards = ({ data, value, index }) => {
    if (value !== index) return null;

    const { confirmed, recovered, deaths, lastUpdate, deltaconfirmed, deltadeaths, deltarecovered } 
            = (data && index === 1 && data.totData) ? data.totData[0] : data;

    if (!confirmed) {
        return (<Typography variant="button" display="block" align='center'>
                    Loading...
                </Typography>);
    }

    const lastUpdated = (index === 2 || index === 0) ? (<Typography variant="caption" display="block" align='center'>
            Last Updated at {new Date(lastUpdate).toLocaleString()} IST
        </Typography>) : null;
    return (
        <div className="card-container">
            {lastUpdated}
            <Grid container spacing={3} justify="center" className="grid-container">
                <Grid item component={Card} xs={3} md={3} className="card-card card-infected">
                    <CardContent align='center' className="card-content">
                        <Typography color="textSecondary" gutterBottom className="card-heading">Confirmed</Typography>
                        <Typography variant="h5" className="card-curdata">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator="," />
                        </Typography>
                        {deltaconfirmed > 0 ? <Typography>+{deltaconfirmed}</Typography> : null}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} md={3} className="card-card card-recovered">
                    <CardContent align='center'>
                        <Typography color="textSecondary" gutterBottom className="card-heading">Recovered</Typography>
                        <Typography variant="h5" className="card-curdata">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator="," />
                        </Typography>
                        {deltarecovered > 0 ? <Typography>+{deltarecovered}</Typography>  : null}
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={3} md={3} className="card-card card-deaths">
                    <CardContent align='center'>
                        <Typography color="textSecondary" gutterBottom className="card-heading">Deceased</Typography>
                        <Typography variant="h5" className="card-curdata">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator="," />
                        </Typography>
                        {deltadeaths > 0 ? <Typography>+{deltadeaths}</Typography> : null}
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;