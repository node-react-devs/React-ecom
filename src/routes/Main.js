import React from "react";
import { Switch} from "react-router-dom";
import Home from "../components/Home/Home";

const Main = () => {
  return (
    <div>
      <Switch>
        <Home/>
      </Switch>
    </div>

  );
};

export default Main;
