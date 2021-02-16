import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { RequestProvider } from "./utils/requestContainer";

const App = () => (
  <Router basename="/spacex">
    <RequestProvider>
      <Navbar />
      <Routes />
    </RequestProvider>
  </Router>
);

export default App;
