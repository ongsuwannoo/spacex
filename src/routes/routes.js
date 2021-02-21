import React, { lazy } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

const Home = lazy(() => import('../pages/Home.js'));
const Launches = lazy(() => import('../pages/Launches.js'));
const NoMatch = lazy(() => import('../pages/NoMatch.js'));
const RocketDetail = lazy(() => import('../pages/RocketDetail.js'));
const LauncheDetail = lazy(() => import('../pages/LauncheDetail.js'));

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
