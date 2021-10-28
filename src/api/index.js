import axios from 'axios';

const indianApi = 'https://data.covid19india.org';
const globalApi = 'https://covid19.mathdro.id/api';

export const fetchIndiaData = async () => {
  try {
    const {
      data: {statewise},
    } = await axios.get(`${indianApi}/data.json`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
          deltaconfirmed,
          deltarecovered,
          deltadeaths,
          lastUpdated,
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
            lastUpdated: lastUpdated,
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
          lastUpdated,
        }) => {
          return {
            confirmed: {value: parseInt(confirmed)},
            recovered: {value: parseInt(recovered)},
            deaths: {value: parseInt(deaths)},
            deltaconfirmed: parseInt(deltaconfirmed),
            deltarecovered: parseInt(deltarecovered),
            deltadeaths: parseInt(deltadeaths),
            lastUpdated: lastUpdated,
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
    } = await axios.get(`${indianApi}/data.json`);
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

export const fetchGlobalData = async (country) => {
  let changeableUrl = !country
    ? globalApi
    : `${globalApi}/countries/${country}`;
  try {
    const {
      data: {confirmed, recovered, deaths, lastUpdate},
    } = await axios.get(changeableUrl);
    return {confirmed, recovered, deaths, lastUpdate};
  } catch (error) {
    console.log('fetchGlobalData -> error', error);
  }
};

export const fetchDailyData = async () => {
  try {
    const {data} = await axios.get(`${globalApi}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      recovered: dailyData.confirmed.total - dailyData.deaths.total,
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
    } = await axios.get(`${globalApi}/countries`);
    return countries;
  } catch (error) {
    console.log('fetchCountries -> error', error);
  }
};
