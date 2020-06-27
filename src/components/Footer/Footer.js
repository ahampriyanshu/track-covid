import React from 'react';
import {Typography} from '@material-ui/core';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Typography variant="caption" display="block" align='center'>
                Created with Care by <a href="https://github.com/dynamicbalaji" target="_blank" rel="noopener noreferrer">Balaji Ashok Kumar (BK)</a>
            </Typography>
            <Typography variant="caption" display="block" align='center'>
                Data Sources <a href="https://services9.arcgis.com/HwXIp55hAoiv6DE9/ArcGIS/rest/services" target="_blank" rel="noopener noreferrer">ArcGIS</a>
                &nbsp;|&nbsp;<a href="https://api.covid19india.org/" target="_blank" rel="noopener noreferrer">Covid19India</a>
                &nbsp;|&nbsp;<a href="https://covid19.mathdro.id/api/" target="_blank" rel="noopener noreferrer">Mathdro</a>

            </Typography>
        </div>
    );
}

export default Footer;