import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import StepFlow1 from './1-Band-Name';
import StepFlow2 from './2-User-Roles';
import StepFlow3 from './3-Band-Roles';
import StepFlow4 from './4-Invite-Band';
import StepFlow5 from './5-Band-Calendar';
import StepFlow6 from './6-Band-Style';
import StepFlow7 from './7-Description';

class StepContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            bandName: '',
            currentStep: 1,
            userRoles: new Set(),
            bandRoles: [],
            genres: [],
            inspirations: []
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

    handleSubmitStyle = (skillLevel, genres, inspirations) => {
        this.setState({
            skillLevel: skillLevel,
            genres: genres,
            inspirations: inspirations,
            currentStep: 7
        });
    };

    handleSubmitDescription = (description) => {
        const {bandName, userRoles, bandRoles, genres, inspirations} = this.state;
        this.setState({
            description: description,
            currentStep: 0
        }, () => this.props.completedSetup({
            bandName, userRoles, bandRoles, genres, inspirations
        }));
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
        if (currentStep === 7) {
            return <StepFlow7
                handleSubmitDescription={this.handleSubmitDescription}
            />;
        }
        return <Redirect to={""}/>;
    }
}

export default StepContainer;
