import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CharactersList, CharacterDetails } from './components';
import store from './libs/redux/store';
import { useQuery } from '@apollo/client';
import { CHARACTERS } from './libs/graphql';
import { setAllCharacters } from './libs/redux/states';

const App = () => {
  const { loading, error, data } = useQuery(CHARACTERS, { variables: { page: 1 } });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (!data) return <p>No data found</p>;

  store.dispatch(setAllCharacters(data?.characters));

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CharactersList store={store} />
        </Route>
        <Route path="/:character" exact>
          <CharacterDetails store={store} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
