import React, { Component } from 'react';
import './App.css';
import AppNavbar from "./global/AppNavbar";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import Discover from "./band/Discover";
import Home from "./user/Home";
import {NewBandPageTakeover} from "./global/NewBandPageTakeover";
import StepContainer from "./band/setup_flow/StepContainer";
import 'semantic-ui-css/semantic.min.css'


/**
 * Main application component for the UI.
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      completedBand: {},
      openModal: false
    };
  }

  leftItems = [
    { as: Link, content: "Home", to: "/" },
    { as: Link, content: "Band setup", to: "/setup/" },
    { as: Link, content: "Discover bands", to: "/discover/"}
  ];

  rightItems = [
    { as: "a", content: "Login", key: "login" },
    { as: "a", content: "Register", key: "register" }
  ];

  completedSetup = (band) => {
    this.setState({
      completedBand: band,
      openModal: true
    });
  };

  closeModal = () => {
    this.setState({
      completedBand: {},
      openModal: false
    });
  };

  /**
   * Renders main page content.
   *
   * @returns {*}
   */
  render() {
    const {completedBand, openModal} = this.state;
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
              <Route path="/setup/" render={(props) => <StepContainer {...props} completedSetup={this.completedSetup} />} />
              <Route path="/discover/" component={Discover}/>
            </div>
            <NewBandPageTakeover
                band={completedBand}
                closeModal={this.closeModal}
                openModal={openModal}
            />
          </Router>
      </div>);
  }
}

export default App;
