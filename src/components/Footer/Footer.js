import React from 'react';
import {Typography} from '@material-ui/core';

import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-container">
            <Typography variant="caption" display="block" align='center'>
                Built By PriyanshuMay
            </Typography>
        </div>
    );
}

export default Footer;