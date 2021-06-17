import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import CountryCard from './components/CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);

  const URL = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    const fetchData = async () => {
      const country = await axios.get(URL);
      console.log(country.data);
      setCountries(country.data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <h1>Welcome to Countries List</h1>
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </main>
  );
};

export default App;
