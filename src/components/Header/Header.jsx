import React from 'react';
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
          <span className="header track" > TRACK </span> <span className="header covid" >&nbsp;COVID </span>
        </div>
        </StyleRoot>
    );
}

export default Header;