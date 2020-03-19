import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Teams from './teams';


const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/teams' component={Teams} />
    </Switch>
)

export default Main;