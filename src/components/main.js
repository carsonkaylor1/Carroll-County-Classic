import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import Teams from './teams';
import Info from './info'


const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/info' component={Info} />
    </Switch>
)

export default Main;