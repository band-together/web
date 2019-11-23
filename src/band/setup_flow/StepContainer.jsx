import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import StepFlow1 from './1-Band-Name';
import StepFlow2 from './2-User-Roles';
import StepFlow3 from './3-Band-Roles';
import StepFlow4 from './4-Invite-Band';
import StepFlow5 from './5-Band-Calendar';
import StepFlow6 from './6-Band-Style';
import StepFlow7 from './7-Description';

import '../bandSetup.css';

export default class StepContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: '',
      currentStep: 1,
      userRoles: new Set(),
      bandRoles: [],
      genres: [],
      inspirations: [],
      description: '',
      skillLevel: 'Beginner',
    };
  }

    handleSubmitBandName = (bandName) => {
      this.setState({
        bandName,
        currentStep: 2,
      });
    };

    handleSubmitUserRoles = (userRoles) => {
      this.setState({
        userRoles,
        currentStep: 3,
      });
    };

    handleSubmitBandRoles = (bandRoles) => {
      this.setState({
        bandRoles,
        currentStep: 4,
      });
    };

    handleSubmitBandMembers = () => {
      this.setState({
        currentStep: 5,
      });
    };

    handleSubmitCalendar = () => {
      this.setState({
        currentStep: 6,
      });
    };

    handleSubmitStyle = (skillLevel, genres, inspirations) => {
      this.setState({
        skillLevel,
        genres,
        inspirations,
        currentStep: 7,
      });
    };

    handleSubmitDescription = (bandDescription) => {
      const {
        bandName, userRoles, bandRoles, genres, inspirations, skillLevel, description,
      } = this.state;
      const { completedSetup } = this.props;
      this.setState({
        description: bandDescription,
        currentStep: 0,
      }, () => completedSetup({
        bandName, userRoles, bandRoles, genres, inspirations, skillLevel, description,
      }));
    };

    render() {
      const { currentStep, userRoles, bandRoles } = this.state;
      switch (currentStep) {
        case 1:
          return (
            <StepFlow1
              handleSubmitBandName={this.handleSubmitBandName}
            />
          );
        case 2:
          return (
            <StepFlow2
              handleSubmitUserRoles={this.handleSubmitUserRoles}
            />
          );
        case 3:
          return (
            <StepFlow3
              userRoles={userRoles}
              handleSubmitBandRoles={this.handleSubmitBandRoles}
            />
          );
        case 4:
          return (
            <StepFlow4
              userRoles={userRoles}
              bandRoles={bandRoles}
              handleSubmitBandMembers={this.handleSubmitBandMembers}
            />
          );
        case 5:
          return (
            <StepFlow5
              handleSubmitCalendar={this.handleSubmitCalendar}
            />
          );
        case 6:
          return (
            <StepFlow6
              handleSubmitStyle={this.handleSubmitStyle}
            />
          );
        case 7:
          return (
            <StepFlow7
              handleSubmitDescription={this.handleSubmitDescription}
            />
          );
        default:
          return <Redirect to="/" />;
      }
    }
}

StepContainer.propTypes = {
  completedSetup: PropTypes.func.isRequired,
};
