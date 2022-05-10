import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Dashboard from "./Components/Dashboard";
import ShapeShift from "./Components/ShapeShift";
import Login from "./Components/Login";

export default (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/shapeshift" component={ShapeShift} />
    <Route path="/login" component={Login} />
  </Switch>
);
