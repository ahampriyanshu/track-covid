import SelectionTabs from './components/SelectionTabs/SelectionTabs.jsx';
import React, {useState, Suspense, lazy} from 'react';
import {ThemeProvider, Paper} from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import IconButton from '@material-ui/core/IconButton';
import { createTheme } from '@material-ui/core/styles';
import Radium, {StyleRoot} from 'radium';
import {zoomIn} from 'react-animations';
import * as Icon from 'react-feather';
import './App.css';

const Footer = lazy(() =>
  import('./components/Footer/Footer' /* webpackChunkName: "Footer" */)
);

function App() {
  const styles = {
    zoomIn: {
      animation: 'x 2.5s',
      animationName: Radium.keyframes(zoomIn, 'zoomIn'),
    },
  };

  const [darkMode, setDarkMode] = useState(false);

  const icon = darkMode ? <Icon.Sun /> : <Icon.Moon />;

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
      primary: {main: '#f2a365', contrastText: '#fff'},
      background: {
        paper: '#161625',
      },
    },
  });

  const lightTheme = createTheme({
    palette: {
      type: 'light',
      primary: {main: '#29c7ac', contrastText: '#fff'},
      background: {
        paper: 'white',
      },
    },
  });

  return (
    <div
      style={{
        height: '100%',
        position: 'absolute',
        left: '0px',
        right: '0px',
        top: '0px',
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Paper elevation={0}>
          <Suspense fallback={<div />}>
            <StyleRoot>
              <div className="headerCont">
                <span style={styles.zoomIn} className="header track">
                  {' '}
                  TRACK{' '}
                </span>{' '}
                <span style={styles.zoomIn} className="header covid">
                  &nbsp;COVID{' '}
                </span>{' '}
                <span style={styles.zoomIn} className="toggle-button">
                  <IconButton
                    aria-label="darkMode"
                    onClick={() => setDarkMode(!darkMode)}
                  >
                    {icon}
                  </IconButton>
                </span>
              </div>
            </StyleRoot>
          </Suspense>
          <SelectionTabs />
          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </Paper>
      </ThemeProvider>
    </div>
  );
}

export default React.memo(App);
