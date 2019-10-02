import React, { Component } from 'react';
import StepFlow1 from './StepFlow1';
import StepFlow2 from './StepFlow2';
import StepFlow3 from './StepFlow3';

class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            bandName: '',
            currentStep: 1,
            userRoles: new Set()
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

    handleSubmitBandRoles = (userRoles, bandRoles) => {
        this.setState({
            userRoles: userRoles,
            bandRoles: bandRoles,
            currentStep: 4
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
        return <div/>
    }
}

export default StepContainer;
