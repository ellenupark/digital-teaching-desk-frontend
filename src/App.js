import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import HomePage from './containers/HomePage'
import DirectoryContainer from './containers/DirectoryContainer'
import ArticleContainer from './containers/ArticleContainer'
import VideoContainer from './containers/VideoContainer'
import NavBar from './components/NavBar'


const App = () => {
  return (
    <Router>
      <div className="App">
        <Route path='/' component={NavBar} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/directory' component={DirectoryContainer} />
          <Route exact path='/articles/:articleId' component={ArticleContainer} />
          <Route exact path='/videos/:videoId' component={VideoContainer} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;