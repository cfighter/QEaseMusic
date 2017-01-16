import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory } from 'react-router';
import TopBar from './components/TopBar/TopBar.jsx';
import TabBar from './components/TabBar/TabBar.jsx';
import LeftBar from './components/LeftBar/LeftBar.jsx';
import MusicItem from './components/MusicItem/MusicItem.jsx';
import MusicNews from './components/MusicNews/MusicNews.jsx';
import Index from './views/index.jsx';
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
    <Route path="/tab" component={TabBar}/>
    <Route path="/left" component={LeftBar}/>
    <Route path="/music" component={MusicItem}/>
    <Route path="/news" component={MusicNews}/>
  </Router>
, document.getElementById('root'));