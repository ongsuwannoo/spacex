import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from '../pages/Home';
import Rockets from '../pages/Rockets';
import Launches from '../pages/Launches';
import NoMatch from '../pages/NoMatch';
import RocketDetail from "../pages/RocketDetail";
import LauncheDetail from "../pages/LauncheDetail";

function Routes() {
  return (
    <div className='_main'>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/rockets/detail/:rocketId">
          <RocketDetail />
        </Route>
        <Route path="/rockets">
          <Rockets />
        </Route>

        <Route path="/launches/detail/:rauncheId">
          <LauncheDetail />
        </Route>
        <Route path="/launches" component={Launches} />

        <Route path="*" component={NoMatch} />
      </Switch>
    </div>
  )
};

export default Routes;
