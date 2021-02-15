// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <Router basename="/spacex">
      <div className="nav">
        <input type="checkbox" id="nav-check"></input>
        <div className="nav-header">
          <div className="nav-title">
            JoGeek
                </div>
        </div>
        <div className="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/old-match">Old Match, to be redirected</Link>
          <Link to="/will-match">Will Match</Link>
          <Link to="/will-not-match">Will Not Match</Link>
          <Link to="/also/will/not/match">Also Will Not Match</Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/old-match">
            <Redirect to="/will-match" />
          </Route>
          <Route path="/will-match">
            <WillMatch />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function WillMatch() {
  return <h3>Matched!</h3>;
}


export default App;
