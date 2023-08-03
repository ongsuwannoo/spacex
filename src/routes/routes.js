import React, { lazy, Suspense } from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import Loading from '../components/Loading.js';

const Home = lazy(() => import('../pages/Home.js'));
const Launches = lazy(() => import('../pages/Launches.js'));
const Rockets = lazy(() => import('../pages/Rockets.js'));
const NoMatch = lazy(() => import('../pages/NoMatch.js'));
const RocketDetail = lazy(() => import('../pages/RocketDetail.js'));
const LauncheDetail = lazy(() => import('../pages/LauncheDetail.js'));

function Router() {
  return (
    <Suspense fallback={<Loading />}>
      <div className='_main'>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/rockets/detail/:rocketId" element={<RocketDetail />} />
          <Route path="/rockets" element={<Rockets />} />
          <Route path="/launches/detail/:rauncheId" element={<LauncheDetail />} />
          <Route path="/launches" element={<Launches />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </Suspense>
  )
};

export default Router;
