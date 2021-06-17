import React from 'react';

const Countries = ({ country }) => {
  const { name, capital, flag } = country;
  return (
    <div>
      <ul>
        <li>name: {name}</li>
        <li>capital: {capital}</li>
        <img width='100' src={flag} alt={flag} />
      </ul>
    </div>
  );
};

export default Countries;