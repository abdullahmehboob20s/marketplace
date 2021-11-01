import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import PetDetails from "pages/PetDetails/PetDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet-details" component={PetDetails} />
      </Switch>
    </Router>
  );
}

export default App;
