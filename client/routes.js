import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './components/presentational/Homepage';
import Login from './components/container/Login';
import Signup from './components/container/Signup';
import RegularUser from './components/container/RegularUser';
import AdminUser from './components/container/AdminUser';

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        <Route path="/signup" component={Signup} exact={true}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
