import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharactersList, Character } from './components';

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact>
        <CharactersList />
      </Route>
      <Route path="/:character" exact>
        <Character />
      </Route>
    </Switch>
  </Router>
);

export default App;
