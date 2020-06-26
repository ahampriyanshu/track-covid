import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider, Paper } from '@material-ui/core';
import './App.css';
import { Header , SelectionTabs } from './components';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
});


class App extends Component {

  render() {
    return (
      <ThemeProvider theme={theme}>
<Paper>
      <div className="container">
        <Header />
        <SelectionTabs />
       
      </div>
      </Paper>
      </ThemeProvider>
    );
  }
}

export default App;
