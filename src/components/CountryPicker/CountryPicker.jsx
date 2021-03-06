import {Select, FormControl, MenuItem} from '@material-ui/core';
import React, {useState, useEffect} from 'react';

import './CountryPicker.css';
import {fetchCountries} from '../../api';

const CountryPicker = ({handleCountryChange, value, index}) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCntrs = async () => {
      setCountries(await fetchCountries());
    };

    fetchCntrs();
  }, []);

  if (value !== index) return null;

  const cntryLst = countries
    ? countries.map((country, i) => (
        <MenuItem value={country.name} key={i}>
          {country.name}
        </MenuItem>
      ))
    : null;

  return (
    <FormControl variant="outlined" align="center" className="cntry-container">
      <Select
        align="center"
        displayEmpty
        defaultValue=""
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <MenuItem align="center" value="" key="global">
          <em>Global</em>
        </MenuItem>
        {cntryLst}
      </Select>
    </FormControl>
  );
};

export default React.memo(CountryPicker);
