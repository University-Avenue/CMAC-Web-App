import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPageComponent from './LandingPage';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPageComponent} />
      </Switch>
    </>
  );
}

export default App;
