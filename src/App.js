import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "pages/Home/Home";
import PetDetails from "pages/PetDetails/PetDetails";
import ScrollToTop from "components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/pet-details" component={PetDetails} />
      </Switch>
    </Router>
  );
}

export default App;
