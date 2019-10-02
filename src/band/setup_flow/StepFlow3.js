import React, { Component } from 'react';
import { Form, Header, Icon } from 'semantic-ui-react'
import {BandRoleSelector} from './BandRoleSelector';
import {BandMemberCard} from "./BandMemberCard";

const ROLES = [
    {
        key: 'Guitar',
        text: 'Guitar',
        value: 'Guitar',
        image: { avatar: true, src: '/images/avatar/small/jenny.jpg' },
    },
    {
        key: 'Drums',
        text: 'Drums',
        value: 'Drums',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    }
];

export default class StepFlow3 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRoles: this.props.userRoles,
            loading: false,
            selectedBandRoles: [],
            numberOfExtraRoles: 0
        };
    }

    /**
     * Sends band creation request to the API. Will either redirect on success or display an error.
     */
    handleSubmit = () => {
        // TODO: send submit request
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
            this.props.handleSubmitBandRoles(this.state.userRoles, this.state.bandRoles);
        }, 400);
    };

    handleAddRole = () => {
        console.log("Adding a role.");
        this.setState({
            numberOfExtraRoles: this.state.numberOfExtraRoles + 1
        });
    };

    handleSelectRole = (event, data, i) => {
        console.log("selecting a role", data.value);
        const newBandRoles = this.state.selectedBandRoles;
        newBandRoles[i] = data.value;
        this.setState({
            selectedBandRoles: newBandRoles
        }, () => console.log("current selected band roles: ", this.state.selectedBandRoles));
    };

    render() {
        return <div id="band-setup-step-3">
            <Form
                loading={this.state.loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Field>
                    <Header as="h1">Add your roles</Header>
                    {[...this.state.userRoles].map((role, i) =>
                        <BandMemberCard
                            role={role}
                            name="You"
                            skill="Beginner"
                            description="Lorem ipsum"
                            key={`${role}-${i}`}
                        />
                    )}
                </Form.Field>
                {this.state.numberOfExtraRoles ? [...Array(this.state.numberOfExtraRoles)].map((_, i) =>
                    <div key={`extra-roles-${i}`}>
                        <BandRoleSelector roles={ROLES} onChange={(event, data) => this.handleSelectRole(event, data, i)}/>
                        <Icon name="delete" size="big" onClick={this.handleAddRole}/>
                        <br/>
                    </div>
                ) : null}
                <Icon name="add circle" size="big" onClick={this.handleAddRole}/>
                <Form.Button>Save</Form.Button>
            </Form>
        </div>;
    }
}
