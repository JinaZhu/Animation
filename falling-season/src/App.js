import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Winter from "./Pages/Winter";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/" component={Winter} />
      </Switch>
    </Router>
  );
}

export default App;
