import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import classes from "./App.module.css";
import About from "./components/About/About";
import Length from "./components/Length/Length";
import Temperature from "./components/Temperature/Temperature";
import NavigationItems from "./components/Navigation/NavigationItems/NavigationItems";

function App() {
  return (
    <BrowserRouter>
      <div className={classes.container}>
        <NavigationItems />
        <Switch>
          <Route exact path="/" component={About} />
          <Route exact path="/length" component={Length} />
          <Route exact path="/temperature" component={Temperature} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
