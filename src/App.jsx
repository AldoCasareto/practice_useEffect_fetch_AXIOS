import React from 'react';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Countries from './components/Countries';
import CountryCard from './components/CountryCard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Countries} />
        <Route
          exact
          path='/country/:countryPopulation'
          component={CountryCard}
        />
      </Switch>
    </Router>
  );
};

export default App;
