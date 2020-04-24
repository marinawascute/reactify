import React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';


import Login from './component/Login';
import Register from './component/Register';
import Dashboard from './component/Dashboard';
import Albums from './component/Albums';
import Artists from './component/Artists';
import Playlists from './component/Playlists';
import Songs from './component/Songs';

import PageNotFound from './component/PageNotFound/PageNotFound';

import './static/css/Style.css';
import './static/css/Custom.css';

import './static/css/Main.css';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact={true} component={Login}/>
        <Route path="/register" exact={true} component={Register}/>
        <Route path="/home" exact={true} component={Dashboard}/>
        <Route path="/albums" exact={true} component={Albums}/>
        <Route path="/artists" exact={true} component={Artists}/>
        <Route path="/playlists" exact={true} component={Playlists}/>
        <Route path="/songs" exact={true} component={Songs}/>

        <Route component={PageNotFound}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
