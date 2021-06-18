import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CountryCard = () => {
  const [countries, setCountries] = useState([]);
  const { countryPopulation } = useParams();
  const URL = `https://restcountries.eu/rest/v2/all`;

  const filterResult = countries.filter((country) => {
    return country.population === +countryPopulation;
  });

  console.log(filterResult);
  console.log(countryPopulation);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(URL);
      setCountries(res.data);
    };
    fetchData();
  }, [URL]);

  return (
    <div>
      {' '}
      {filterResult.map((c) => 
      {
        return (
          <div className='country-container' key={c.population}>
            <div>
              <img src={c.flag} alt='c.name' className='country-image' />
            </div>
            <div>
              <h1 className='name'>{c.name}</h1>
              <h2>Capital: {c.capital}</h2>
              <p>Continent: {c.region}</p>
              <p>
                <strong>Native Name: {c.nativeName} </strong>
              </p>
              <p>
                <strong>Demonym: {c.demonym}</strong>
              </p>
            </div>
          </div>
        );
      }  
      )}
    </div>
  );
};

export default CountryCard;
