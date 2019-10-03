import React, { Component } from 'react';
import { Form, Header, Icon } from 'semantic-ui-react';
import {BandRoleSelector} from './BandRoleSelector';

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
    },
    {
        key: 'Bass',
        text: 'Bass',
        value: 'Bass',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Vocalist',
        text: 'Vocalist',
        value: 'Vocalist',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Keys',
        text: 'Keys',
        value: 'Keys',
        image: { avatar: true, src: '/images/avatar/small/elliot.jpg' },
    },
    {
        key: 'Wildcard',
        text: 'Wildcard',
        value: 'Wildcard',
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
            this.props.handleSubmitBandRoles(this.state.selectedBandRoles);
        }, 400);
    };

    handleAddRole = () => {
        this.setState({
            numberOfExtraRoles: this.state.numberOfExtraRoles + 1
        });
    };

    handleSelectRole = (event, data, i) => {
        const newBandRoles = this.state.selectedBandRoles;
        newBandRoles[i] = data.value;
        this.setState({
            selectedBandRoles: newBandRoles
        }, () => console.log("current selected band roles: ", this.state.selectedBandRoles));
    };

    handleDeleteRole = (event, data, position) => {
        let newBandRoles = this.state.selectedBandRoles;
        newBandRoles.splice(position, 1);
        this.setState({
            numberOfExtraRoles: this.state.numberOfExtraRoles - 1,
            selectedBandRoles: newBandRoles
        }, () => console.log("New selected band roles: ", this.state.selectedBandRoles));
    };

    render() {
        const {loading, userRoles, numberOfExtraRoles, selectedBandRoles} = this.state;
        return <div id="band-setup-step-3">
            <Form
                loading={loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Field>
                    <Header as="h1">Add your roles</Header>
                    {[...userRoles].map((role, position) =>
                        <div key={`extra-roles-${position}`}>
                        <BandRoleSelector
                            option={role}
                            roles={ROLES}
                            disabled={true}
                        />
                        </div>
                    )}
                </Form.Field>
                {numberOfExtraRoles ? [...Array(numberOfExtraRoles)].map((_, position) =>
                    <div key={`extra-roles-${position}`}>
                        <BandRoleSelector
                            option={selectedBandRoles[position]}
                            roles={ROLES}
                            onChange={(event, data) => this.handleSelectRole(event, data, position)}/>
                        <Icon name="delete" size="big" onClick={(event, data) => this.handleDeleteRole(event, data, position)}/>
                        <br/>
                    </div>
                ) : null}
                <Icon name="add circle" size="big" onClick={this.handleAddRole}/>
                <Form.Button>Save</Form.Button>
            </Form>
        </div>;
    }
}
