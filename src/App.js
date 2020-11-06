import React from "react";
import styles from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./App/Home";
import { Buy } from "./App/Buy";

export const App = () => {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/buy">
            <Buy />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
