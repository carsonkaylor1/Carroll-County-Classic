import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/Landingpage';
import Teams from './Teams/Teams';
import Info from './Info/Info'


const Main = () => (
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/teams' component={Teams} />
        <Route exact path='/info' component={Info} />
    </Switch>
)

export default Main;