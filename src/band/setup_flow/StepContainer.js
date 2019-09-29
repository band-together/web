import React, { Component } from 'react';
import StepFlow1 from './StepFlow1';
import StepFlow2 from './StepFlow2';


class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            bandName: '',
            currentStep: 1
        };
    }

    handleSubmitBandName = (newBandName) => {
        this.setState({
            bandName: newBandName,
            currentStep: 2
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
            />;
        }
        return <div/>
    }
}

export default StepContainer;
