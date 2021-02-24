import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './containers/HomePage'
import SearchContainer from './containers/search/SearchContainer'
import ArticleContainer from './containers/articles/ArticleContainer'
import VideoContainer from './containers/VideoContainer'
import NavBar from './components/NavBar'
import AboutContainer from './containers/about/AboutContainer'
import ExploreContainer from './containers/explore/ExploreContainer'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={AboutContainer} />
          <Route exact path='/explore' component={ExploreContainer} />
          <Route exact path='/directory' component={SearchContainer} />
          <Route exact path='/articles/:articleId' component={ArticleContainer} />
          <Route exact path='/videos/:videoId' component={VideoContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;