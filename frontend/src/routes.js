import {BrowserRouter, Switch, Route} from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import Next from './pages/Next';
 

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/next" component={Next}/>
                
            </ Switch>

        </ BrowserRouter>

        

    );
} 