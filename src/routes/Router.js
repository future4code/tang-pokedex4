import React from "react";
import HomePage from "../screens/HomePage/HomePage";
import Pokedex from "../screens/Pokedex/Pokedex";
import Profile from "../screens/Profile/Profile";
import { BrowserRouter, Switch, Route} from "react-router-dom";

const Router = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route exact path={"/"}>
        <HomePage/>
      </Route>      
      <Route exact path={"/pokedex"}>
        <Pokedex />
      </Route>
      <Route exact path={"/profile"}>
        <Profile />
      </Route>
    </Switch>
  </BrowserRouter>
)};

export default Router;