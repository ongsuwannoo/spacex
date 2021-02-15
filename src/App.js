import React from 'react';
import Navbar from './components/navbar';
import Routes from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router basename="/spacex">
    <Navbar />
    <Routes />
  </Router>
);

export default App;
