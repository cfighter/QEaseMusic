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
import Index from './views/index.jsx';
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
             <Route path="/index" component={Index}/>

        	<Route path="/main" component={MainPage}>
        		<IndexRoute component={TopPage}/>
     			<Route path="/:radio" component={RadioPage}/>
      			<Route path="/:top" component={TopPage}/>
        	</Route>
            <Route path="/mylist" component={MyListPage}/>
            <Route path="/list" component={ListPage}/>
        	<Route path="/play" component={PlayerPage}/>
        </Route>    
    </Router>
    , document.getElementById('root'));
