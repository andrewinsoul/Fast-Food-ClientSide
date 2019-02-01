import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./components/presentational/Homepage";
import Login from "./components/container/Login";
import Signup from "./components/container/Signup";
import AllMenu from "./components/container/AllMenu";
import RecentOrder from "./components/container/RecentOrder";
import PrivateRoute from "./PrivateRoute";
import AdminUser from "./components/container/AdminUser";

const Routes = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/signup" component={Signup} exact />
        <Route path="/order" component={AllMenu} exact />
        <Route path="/recent" component={RecentOrder} exact />
        <Route path="/admin" component={AdminUser} exact />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
