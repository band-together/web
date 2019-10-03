import React from 'react';
import {Form} from "semantic-ui-react";

export default class StepFlow6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    handleSubmit = () => {
        this.setState({
            loading: true
        });
        setTimeout(() => {
            this.setState({
                loading: false
            });
            this.props.handleSubmitStyle();
        }, 400);
    };

    render() {
        const {loading} = this.state;

        return  <div id="band-setup-step-6">
            <Form
                loading={loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Button>Finish</Form.Button>
            </Form></div>;
    }
}
