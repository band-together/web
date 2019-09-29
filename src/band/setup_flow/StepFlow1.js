import React, { Component } from 'react';
import { Form } from 'semantic-ui-react'


/**
 * Band create page.
 */
class StepFlow1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bandName: ''
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
            this.props.handleSubmitBandName(this.state.bandName);
        }, 400);
    };

    /**
     * Handles changes to the text input field.
     * @returns {*}
     */
    handleChange = (event) => {
        this.setState({
            bandName: event.target.value
        });
    };

    render() {
        return (
            <div id="band-setup">
                <Form
                    loading={this.state.loading}
                    onSubmit={this.handleSubmit}
                >
                    <Form.Field>
                        <label>Enter band name</label>
                        <input
                            name="band-name"
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </div>);
    }
}

export default StepFlow1;
