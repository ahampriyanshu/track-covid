import React, { useState } from 'react';
import './App.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, Paper } from '@material-ui/core';
import { SelectionTabs, Footer } from './components';
import IconButton from '@material-ui/core/IconButton';
import * as Icon from 'react-feather';
import { zoomIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';

function App(){
  const styles = {
    zoomIn: {
      animation: 'x 3s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn')
    }
  }

  const [ darkMode, setDarkMode ] = useState(false);

  const icon = darkMode ? <Icon.Moon /> : <Icon.Sun />;

const darkTheme = createMuiTheme({
  palette: {
    type:"dark",
  },
});

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      paper: "white"
    }
  }
});


    return (
      <React.Fragment> 
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Paper elevation={0} >
      <StyleRoot>
          <div style={styles.zoomIn} className="headerCont" >
          <span className="header track" > TRACK </span> <span className="header covid" >&nbsp;COVID </span>
          <IconButton aria-label="darkMode" onClick={() => setDarkMode(!darkMode)} >
      {icon}
      </IconButton>
        </div>
        </StyleRoot>
      <SelectionTabs />
      <Footer />
      </Paper>
      </ThemeProvider>
      </React.Fragment>
    );
  }

export default App;
