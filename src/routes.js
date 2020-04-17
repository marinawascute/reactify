import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Menu from './Dashboard/index';
import Login from './Login/index'


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                
                <Route path="/" exact component={Login}/>
                <Route path="/menu" component={Menu}/>
                
            </ Switch>

        </ BrowserRouter>

        

    );
} 