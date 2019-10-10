import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import RepoPage from "./pages/RepoPage";
import "./assets/scss/global.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <header className="header">
            <Link to={"/"} className="logo">
              Home
            </Link>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/details/:id" component={RepoPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
