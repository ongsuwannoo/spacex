import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes/routes';
import { BrowserRouter  } from 'react-router-dom';
import { RequestProvider } from "./utils/requestContainer";
import './App.css';

// const basename = process.env.NODE_ENV === 'production' ? "/spacex" : '/';

const App = () => (
  <BrowserRouter basename={"/"}>
    <RequestProvider>
      <Navbar />
      <Routes />
    </RequestProvider>
  </BrowserRouter>
);

export default App;
