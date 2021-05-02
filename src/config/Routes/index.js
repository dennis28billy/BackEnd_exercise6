import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../../components/pages/Dashboard";
import Login from "../../components/pages/Login";
import Register from "../../components/pages/Register";
import RegisterFirebase from "../../components/pages/RegisterFirebase";
import About from "../../components/pages/About";
import TambahUser from "../../components/pages/TambahUser";
import LoginFirebase from "../../components/pages/LoginFirebase";
import DashboardFirebase from "../../components/pages/DashboardFirebase";


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/AddUser">
          <TambahUser />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/registerFirebase">
          <RegisterFirebase />
        </Route>
        <Route path="/loginFirebase">
          <LoginFirebase />
        </Route>
        <Route path="/dashboardFirebase">
          <DashboardFirebase />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;