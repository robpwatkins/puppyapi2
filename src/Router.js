import React from 'react';
import { Switch, Route } from 'react-router';
import Thumbs from './components/Thumbs';
import Login from './components/Login';

const Router = () => (
  <Switch>
    <Route exact path="/" component={Thumbs} />
    <Route path="/login" component={Login} />
  </Switch>
)

export default Router;
