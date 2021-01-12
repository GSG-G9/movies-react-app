import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Favorite from './pages/Favorite';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/movie/:id" component={Details} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
