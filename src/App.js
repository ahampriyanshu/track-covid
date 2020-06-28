import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, Paper } from '@material-ui/core';
import './App.css';
import { SelectionTabs, Header, Footer } from './components';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});


class App extends Component {

  render() {
    return (
      <div className="container">
      <ThemeProvider theme={theme}>
      <Paper elevation={0} >
      <Header />
      <SelectionTabs />
      <Footer />
      </Paper>
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
