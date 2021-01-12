import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Details from './pages/Details';
import NotFound from './pages/404';


function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favorite">Favorite</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/favorite" component={Favorite} />
          <Route path="/movie/:id" component={Details} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
