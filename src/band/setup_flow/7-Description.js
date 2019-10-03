import React from 'react';
import {Button, Form, Header} from "semantic-ui-react";

export default class StepFlow7 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            description: ""
        };
    }

    handleChange = (event) => {
        this.setState({
            description: event.target.value
        });
    };

    handleSubmit = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
            this.props.handleSubmitDescription(this.state.description);
        }, 400);
    };

    render() {
        return <div id="band-setup-step-2">
            <Form
                loading={this.state.loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Field>
                    <Header as="h1">Describe your band</Header>
                    <input
                        name="band-description"
                        type="text-area"
                        onChange={this.handleChange}
                    >
                    </input>
                </Form.Field>
                <Form.Field>
                    <Button>Finish</Button>
                </Form.Field>
            </Form>
        </div>
    }
}