import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Register from "./Register";
import Login from "./Login";
import List from "./List";
import Home from "./Home"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/list" component={List} />


    </Switch>
  );
}

export default App;
