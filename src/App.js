import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './containers/HomePage'
import ArticleContainer from './containers/ArticleContainer'

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/articles/:id' component={ArticleContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;