import {Paper, Tabs, Tab} from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import React, {Suspense, lazy, useState, useEffect} from 'react';
import * as Icon from 'react-feather';

import './SelectionTabs.css';
import {
  fetchIndiaData,
  fetchIndiaGraphData,
  fetchCntryData,
  fetchDailyData,
} from '../../api';

const Cards = lazy(() =>
  import('../Cards/Cards' /* webpackChunkName: "Cards" */)
);
const About = lazy(() =>
  import('../About/About' /* webpackChunkName: "About" */)
);
const CountryPicker = lazy(() =>
  import(
    '../CountryPicker/CountryPicker' /* webpackChunkName: "CountryPicker" */
  )
);
const Chart = lazy(() =>
  import('../Chart/Chart' /* webpackChunkName: "Chart" */)
);
const DataTable = lazy(() =>
  import('../DataTable/DataTable.jsx' /* webpackChunkName: "DataTable" */)
);

const SelectionTabs = () => {
  const [value, setValue] = useState(1);
  const [data, setData] = useState([]);
  const [graphData, setGraphData] = useState([]);
  const [country, setCountry] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setData(await fetchIndiaData());
    };
    fetchData();
    const fetchGraphData = async () => {
      setGraphData(await fetchIndiaGraphData());
    };
    fetchGraphData();
  }, []);

  const handleChange = (event, newVal) => {
    setValue(newVal);
    setCountry('');
    if (newVal === 1) {
      const fetchData = async () => {
        setData(await fetchIndiaData());
      };
      fetchData();
      const fetchGraphData = async () => {
        setGraphData(await fetchIndiaGraphData());
      };
      fetchGraphData();
    } else if (newVal === 2) {
      const fetchData = async () => {
        setData(await fetchCntryData());
      };
      fetchData();
      const fetchGraphData = async () => {
        setGraphData(await fetchDailyData());
      };
      fetchGraphData();
    }
  };

  const handleCountryChange = async (country) => {
    const retrievedData = await fetchCntryData(country);
    setData(retrievedData);
    setGraphData(retrievedData);
    setCountry(country);
  };

  return (
    <div className="tab-container">
      <Suspense fallback={<div />}>
        <Paper square elevation={0} className="tab-style">
          <Tabs
            className="tabs"
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            centered
          >
            <Tab icon={<Icon.Users />} label="About" />
            <Tab icon={<Icon.Home />} label="Home" />
            <Tab icon={<PublicIcon />} label="World" />
          </Tabs>
        </Paper>
      </Suspense>

      <Suspense fallback={<div />}>
        <About value={value} index={0} />
      </Suspense>

      <Suspense fallback={<div />}>
        <Cards data={data} value={value} index={1} />
      </Suspense>

      <Suspense fallback={<div />}>
        <Chart value={value} index={1} graphData={graphData} />
      </Suspense>

      <Suspense fallback={<div />}>
        <DataTable value={value} index={1} data={data} />
      </Suspense>

      <Suspense fallback={<div />}>
        <CountryPicker
          handleCountryChange={handleCountryChange}
          value={value}
          index={2}
        />
      </Suspense>

      <Suspense fallback={<div />}>
        <Cards data={data} value={value} index={2} />
      </Suspense>

      <Suspense fallback={<div />}>
        <Chart
          value={value}
          index={2}
          graphData={graphData}
          country={country}
        />
      </Suspense>
    </div>
  );
};

export default React.memo(SelectionTabs);
