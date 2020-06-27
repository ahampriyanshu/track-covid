import React from 'react';
import { Typography } from '@material-ui/core';
import './Header.css';

const Header = () => {
    return (
       
        <div className="headerCont">
          <Typography className="header" variant="h3">TRACK COVID</Typography>
        </div>
     
    );
}

export default Header;