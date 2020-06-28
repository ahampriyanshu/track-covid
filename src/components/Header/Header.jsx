import React from 'react';
import { Typography } from '@material-ui/core';
import './Header.css';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Header = () => {

  const styles = {
    zoomIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
  }

    return (
      <StyleRoot>
          <div style={styles.zoomIn} className="headerCont" >
          <Typography  className="header" variant="h3">TRACK COVID</Typography>
        </div>
        </StyleRoot>
    );
}

export default Header;