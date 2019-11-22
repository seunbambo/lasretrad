import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import License from "./components/license";
import Dashboard from "./components/Dashboard";
import NotFound from "./components/notFound";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          <NavBar />
          <div className="container">
            <Switch>
              <Route path="/license" component={License} />
              <Route path="/not-found" component={NotFound} />
              <Route path="/" exact component={Dashboard} />
              <Redirect to="/not-found" />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
