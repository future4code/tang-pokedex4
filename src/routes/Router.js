import React from "react";
import HomePage from "../screens/HomePage/HomePage";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <HomePage/>
      </Route>      
      <Route>
        <HomePage/>
      </Route>
    </Switch>
  </BrowserRouter>
)};

export default Router;