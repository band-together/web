import React, { Component } from 'react';
import StepFlow1 from './1-Band-Name';
import StepFlow2 from './2-User-Roles';
import StepFlow3 from './3-Band-Roles';
import StepFlow4 from './4-Invite-Band';
import StepFlow5 from './5-Band-Calendar';
import StepFlow6 from './6-Band-Style';
import {StepDone} from './StepDone';

class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            bandName: '',
            currentStep: 1,
            userRoles: new Set(),
            bandRoles: []
        };
    }

    handleSubmitBandName = (newBandName) => {
        this.setState({
            bandName: newBandName,
            currentStep: 2
        });
    };

    handleSubmitUserRoles = (userRoles) => {
        this.setState({
            userRoles: userRoles,
            currentStep: 3
        });
    };

    handleSubmitBandRoles = (bandRoles) => {
        this.setState({
            bandRoles: bandRoles,
            currentStep: 4
        });
    };

    handleSubmitBandMembers = () => {
        this.setState({
            currentStep: 5
        });
    };

    handleSubmitCalendar = () => {
        this.setState({
            currentStep: 6
        });
    };

    handleSubmitStyle = () => {
        this.setState({
            currentStep: 7
        });
    };

    render() {
        const { currentStep } = this.state;
        if (currentStep === 1) {
            return <StepFlow1
                handleSubmitBandName={this.handleSubmitBandName}
            />;
        }
        if (currentStep === 2) {
            return <StepFlow2
                handleSubmitUserRoles={this.handleSubmitUserRoles}
            />;
        }
        if (currentStep === 3) {
            return <StepFlow3
                userRoles={this.state.userRoles}
                handleSubmitBandRoles={this.handleSubmitBandRoles}
            />;
        }
        if (currentStep === 4) {
            return <StepFlow4
                userRoles={this.state.userRoles}
                bandRoles={this.state.bandRoles}
                handleSubmitBandMembers={this.handleSubmitBandMembers}
            />;
        }
        if (currentStep === 5) {
            return <StepFlow5
                handleSubmitCalendar={this.handleSubmitCalendar}
                />
        }
        if (currentStep === 6) {
            return <StepFlow6
                handleSubmitStyle={this.handleSubmitStyle}
                />;
        }
        return <StepDone/>;
    }
}

export default StepContainer;
