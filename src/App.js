import React, { Component } from 'react';

import './App.css';
import { Header , SelectionTabs } from './components';
// import { fetchTNData } from './api';

class App extends Component {

  // async componentDidMount() {
  //   const data = await fetchTNData();
  //   console.log("App -> componentDidMount -> data", data)
  // }

  render() {
    return (
      <div className="container">
        <Header />
        <SelectionTabs />
      </div>
    );
  }
}

export default App;
