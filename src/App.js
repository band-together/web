import React, { Component } from 'react';
import './App.css';
import AppNavbar from "./global/AppNavbar";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Discover from "./band/Discover";
import Home from "./user/Home";

import StepContainer from "./band/setup_flow/StepContainer";
import 'semantic-ui-css/semantic.min.css'


/**
 * Main application component for the UI.
 */
class App extends Component {

  leftItems = [
    { as: Link, content: "Home", to: "/" },
    { as: Link, content: "Band setup", to: "/setup/" },
    { as: Link, content: "Discover bands", to: "/discover/"}
  ];

  rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" }
  ];

  /**
   * Renders main page content.
   *
   * @returns {*}
   */
  render() {
    return (
        <div>
          <Router>
            <AppNavbar
              leftItems={this.leftItems}
              rightItems={this.rightItems}
            >
            </AppNavbar>
            <div id="router content">
              <Route path="/" exact component={Home}/>
              <Route path="/setup/" component={StepContainer}/>
              <Route path="/discover/" component={Discover}/>
            </div>
          </Router>
      </div>);
  }
}

export default App;
