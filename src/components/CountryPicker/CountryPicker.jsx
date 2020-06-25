import React, { useState, useEffect } from 'react';
import { MenuItem, FormControl, Select } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <Select displayEmpty defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <MenuItem value=""><em>Global</em></MenuItem>
        {countries.map((country, i) => <MenuItem key={i} value={country}>{country}</MenuItem>)}
      </Select>
    </FormControl>
  );
};

export default Countries;