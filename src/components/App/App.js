import React from "react";
import { Route, Switch } from "react-router-dom";

import { HomePage, LoginPage } from "../pages";

import "./App.css";

export const App = () => {
  return (
    <main role="main">
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path="/employees" component={HomePage} />
      </Switch>
    </main>
  );
};
