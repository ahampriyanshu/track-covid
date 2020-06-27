import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import './News.css';
import Rotating from '../Rotating/Rotating.jsx';

const News = ({ data, value, index }) => {
    if (value !== index) return null;

    const { lastUpdatetot, news } 
            = (data && index === 0 && data.totData) ? data.totData : null;

    if (!lastUpdatetot) {
        return (<Rotating />);
    }

    console.log(lastUpdatetot);
const lastUpdatedTime = lastUpdatetot ? (<Typography  className="random date" variant="h6" display="block" align='center'>
Last Updated at {lastUpdatetot} IST
</Typography>) : null; 

    return (
        <div className="card-container">
            <Grid container spacing={3} justify="center" className="grid-container">
                <Grid item  xs={3} md={3} className="card-card card-infected">
                    {news}
                </Grid>
            </Grid>
            {lastUpdatedTime}
        </div>
    );
}

export default News;