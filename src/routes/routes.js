import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';
import Rockets from '../pages/Rockets';
import Launches from '../pages/Launches';
import NoMatch from '../pages/NoMatch';
import Detail from "../pages/Detail";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path={"/rockets/detail/:rocketId"}>
        <Detail />
      </Route>
      <Route path="/rockets">
        <Rockets />
      </Route>
      
      <Route path="/launches" component={Launches} />

      <Route path="*" component={NoMatch} />
    </Switch>

  )
};

export default Routes;
