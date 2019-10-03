import React, { Component } from 'react';
import {Form, Card, Header} from "semantic-ui-react";


const FAKE_ROLES = new Set([ "Bass", "Keys" ]);

class StepFlow2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userRoles: new Set(),
            loading: false
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
            this.props.handleSubmitUserRoles(this.state.userRoles);
        }, 400);
    };

    /**
     * Handles changes to the tiles field.
     * @returns {*}
     */
    handleChange = (role) => {
        // TODO: add to roles if added and not already present, remove if removed and is present.
        let prevRoles = this.state.userRoles;
        if (prevRoles.has(role)) {
            prevRoles.delete(role);
        } else {
            prevRoles.add(role);
        }
        this.setState({
            userRoles: prevRoles
        });
    };

    render() {
        return <div id="band-setup-step-2">
            <Form
                loading={this.state.loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Field>
                    <Header as="h1">Select your roles</Header>
                    <Card.Group>

                    {[...FAKE_ROLES].map((role, i) =>
                        <div key={`${role}-${i}`}>
                        <Card
                            onClick={() => this.handleChange(role)}
                            raised={this.state.userRoles.has(role)}
                        >
                            <Card.Header>{role}</Card.Header>
                            <Card.Meta>Beginner</Card.Meta>
                        </Card>
                        </div>
                    )}
                    </Card.Group>
                </Form.Field>
                <Form.Button>Submit</Form.Button>
            </Form>
        </div>;
    }
}

export default StepFlow2;
