import React from "react";
import About from "./components/about";

import {
  Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";

export default function Routes() {
  return (
    <Router history={HashRouter}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
    </Router>
  );
}
