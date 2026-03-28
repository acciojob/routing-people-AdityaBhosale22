import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./UserList.js";
import UserDetails from "./UserDetails.js";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route path="/users/:id" component={UserDetails} />
      </Switch>
    </Router>
  );
}

export default App;