import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute,hashHistory } from 'react-router';
import App from './views/App.jsx';
import MainPage from './views/MainPage.jsx';
import MusicPage from './views/MusicPage.jsx';
import RadioPage from './views/RadioPage.jsx';
import TopPage from './views/TopPage.jsx';
import MyListPage from './views/MyListPage.jsx';
import ListPage from './views/ListPage.jsx';
import PlayerPage from './views/PlayerPage.jsx';
import MusicListPage from './views/MusicListPage.jsx';
import Index from './views/index.jsx';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}> 
        	<Route path="/main" component={MainPage}>
                <IndexRoute component={MusicPage}/> 
                <Route path="/toplist" component={TopPage}/>
                <Route path="/radiolist" component={RadioPage}/>     			
        	</Route>            
            <Route path="/mylist" component={MusicListPage}/>     	
        </Route>         
        <Route path="/play" component={PlayerPage}/>  
    </Router>
    , document.getElementById('root'));
