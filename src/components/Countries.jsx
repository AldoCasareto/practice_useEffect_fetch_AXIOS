import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  const URL = 'https://restcountries.eu/rest/v2/all';

  useEffect(() => {
    const fetchData = async () => {
      const country = await axios.get(URL);
      console.log(country.data);
      setCountries(country.data);
    };
    fetchData();
  }, [URL]);

  const handleFilter = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const matchCountry = countries.filter((country) =>
    country.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Welcome to Countries Data</h1>
      Filter countries <input type='text' onChange={handleFilter} />
      {search ? (
        matchCountry.map((country) => (
          <div key={country.population} className='container'>
            <h2>{country.name}</h2>
            <p>capital: {country.capital}</p>
            <img width='100' src={country.flag} alt={country.flag} />
            <button>
              <Link className='link' to={`/country/${country.population}`}>
                Show More
              </Link>
            </button>
          </div>
        ))
      ) : (
        <p> Please type to find a country</p>
      )}
    </>
  );
};

export default Countries;
