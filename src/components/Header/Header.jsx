import React from 'react';
import { Typography } from '@material-ui/core';
import './Header.css';
import { bounce } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const Header = () => {

  const styles = {
    bounce: {
      animation: 'x 3s',
      animationName: Radium.keyframes(bounce, 'bounce')
    }
  }

    return (
      <StyleRoot>
          <div style={styles.bounce} className="headerCont" >
          <Typography  className="header" variant="h3">TRACK COVID</Typography>
        </div>
        </StyleRoot>
    );
}

export default Header;