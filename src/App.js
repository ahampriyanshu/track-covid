import React, { useState, Suspense, lazy } from "react";
import { ThemeProvider, Paper } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import * as Icon from "react-feather";
import { zoomIn } from "react-animations/";
import Radium, { StyleRoot } from "radium";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";

const SelectionTabs = lazy(() => import('./components/SelectionTabs/SelectionTabs' /* webpackChunkName: "SelectionTabs" */));
const Footer = lazy(() => import('./components/Footer/Footer' /* webpackChunkName: "Footer" */));

function App() {
  const styles = {
    zoomIn: {
      animation: "x 3s",
      animationName: Radium.keyframes(zoomIn, "zoomIn"),
    },
  };

  const [darkMode, setDarkMode] = useState(false);

  const icon = darkMode ? <Icon.Moon /> : <Icon.Sun />;

  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: { main: "#f2a365", contrastText: "#fff" },
      background: {
        paper: "#222831",
      },
    },
  });

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: { main: "#e91e63", contrastText: "#fff" },
      background: {
        paper: "white",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Paper elevation={0}>

          <Suspense fallback={<div />}>
            <StyleRoot>
              <div className="headerCont">
                <span style={styles.zoomIn} className="header track">
                  {" "}
                  TRACK{" "}
                </span>{" "}
                <span style={styles.zoomIn} className="header covid">
                  &nbsp;COVID{" "}
                </span>{" "}
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

          <Suspense fallback={<div />}>
            <SelectionTabs />
          </Suspense>

          <Suspense fallback={<div />}>
            <Footer />
          </Suspense>
        </Paper>
      </ThemeProvider>
    </>
  );
}

export default React.memo(App);