import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Test from "../components/test/test";

const Main = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Test} />
      </Switch>
    </Router>
  );
};

export default Main;
