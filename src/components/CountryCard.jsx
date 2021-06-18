import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CountryCard = ({ match }) => {
  const [countries, setCountries] = useState([]);
  const URL = `https://restcountries.eu/rest/v2/all/?id=${match.params.population}`;

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      setCountries(res.data);
      console.log(res.data);
    };
    fetchData();
  }, [URL]);

  return (
    <div>
      {countries.map((country) => (
        <p>{country.name}</p>
      ))}
    </div>
  );
};

export default CountryCard;
