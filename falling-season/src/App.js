import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Winter from "./Pages/Winter";
import Spring from "./Pages/Spring";
import Swipe from "./Pages/Swipe";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Winter} />
        <Route exact path="/spring" component={Spring} />
        <Route exact path="/swipe" component={Swipe} />
      </Switch>
    </Router>
  );
}

export default App;
