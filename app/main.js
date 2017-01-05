import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import LeftBar from './components/LeftBar/LeftBar.jsx';
import MusicItem from './components/MusicItem/MusicItem.jsx';
import MusicNews from './components/MusicNews/MusicNews.jsx';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={LeftBar}/>
    <Route path="/music" component={MusicItem}/>
    <Route path="/news" component={MusicNews}/>
  </Router>
, document.getElementById('root'));