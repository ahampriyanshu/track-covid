import axios from 'axios';

const apiUrl = 'https://api.covid19india.org';

const cntryApiUrl = 'https://covid19.mathdro.id/api';

export const fetchIndiaData = async () => {
  try {
    const {
      data: {statewise},
    } = await axios.get(`${apiUrl}/data.json`);

    const stateData = statewise
      .filter((a, b) => a.state !== 'Total')
      .sort((a, b) => parseInt(b.confirmed) - parseInt(a.confirmed))
      .map(
        ({
          state,
          confirmed,
          active,
          recovered,
          deaths,
          lastupdatedtime,
          deltaconfirmed,
          deltadeaths,
          deltarecovered,
        }) => {
          return {
            stateName: state,
            confirmed: parseInt(confirmed),
            active: parseInt(active),
            recovered: parseInt(recovered),
            deaths: parseInt(deaths),
            deltaconfirmed: parseInt(deltaconfirmed),
            deltarecovered: parseInt(deltarecovered),
            deltadeaths: parseInt(deltadeaths),
            lastUpdated: lastupdatedtime,
          };
        }
      );
    const totData = statewise
      .filter((a, b) => a.state === 'Total')
      .map(
        ({
          confirmed,
          recovered,
          deaths,
          deltaconfirmed,
          deltadeaths,
          deltarecovered,
          lastupdatedtime,
          statenotes,
        }) => {
          return {
            confirmed: {value: parseInt(confirmed)},
            recovered: {value: parseInt(recovered)},
            deaths: {value: parseInt(deaths)},
            deltaconfirmed: parseInt(deltaconfirmed),
            deltarecovered: parseInt(deltarecovered),
            deltadeaths: parseInt(deltadeaths),
            lastUpdatetot: lastupdatedtime,
            news: statenotes,
          };
        }
      );
    return {stateData, totData};
  } catch (error) {
    console.log('fetchIndiaData -> error', error);
  }
};

export const fetchIndiaGraphData = async () => {
  try {
    const {
      data: {cases_time_series},
    } = await axios.get(`${apiUrl}/data.json`);
    // const stateData = data.filter((state) => state.state === "Tamil Nadu")
    const graphData = cases_time_series.map(
      ({dailyconfirmed, dailydeceased, dailyrecovered}) => {
        return {
          confirmed: parseInt(dailyconfirmed),
          recovered: parseInt(dailyrecovered),
          deaths: parseInt(dailydeceased),
        };
      }
    );
    return graphData;
  } catch (error) {
    console.log('fetchIndiaGraphData -> error', error);
  }
};

export const fetchCntryData = async (country) => {
  let changeableUrl = !country
    ? cntryApiUrl
    : `${cntryApiUrl}/countries/${country}`;
  try {
    const {
      data: {confirmed, recovered, deaths, lastUpdate},
    } = await axios.get(changeableUrl);
    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    console.log('fetchCntryData -> error', error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${cntryApiUrl}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {
    console.log('fetchDailyData -> error', error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: {countries},
    } = await axios.get(`${cntryApiUrl}/countries`);
    return countries;
  } catch (error) {
    console.log('fetchCountries -> error', error);
  }
};
