import React from 'react';
import ChampionSearchContainer from './champions/champions_search_container';
import BuildContainer from './builds/build_container';
import Header from './header/header';
import { Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <div id="app">
      <Header />
      <section id="body">
        <Route exact exact path="/" component={ ChampionSearchContainer} />
        <Route exact path="/build" component={ BuildContainer } />
      </section>
    </div>
  );
};

export default App;
