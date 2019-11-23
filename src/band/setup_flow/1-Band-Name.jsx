import React, { Component } from 'react';
import { Form, Header, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';

/**
 * Band create page.
 */
class StepFlow1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: '',
      loading: false,
    };
  }

    /**
     * Sends band creation request to the API. Will either redirect on success or display an error.
     */
    handleSubmit = () => {
      const { bandName } = this.state;
      const { handleSubmitBandName } = this.props;
      // TODO: send submit request
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
        handleSubmitBandName(bandName);
      }, 400);
    };

    /**
     * Handles changes to the text input field.
     * @returns {*}
     */
    handleChange = (event) => {
      this.setState({
        bandName: event.target.value,
      });
    };

    render() {
      const { loading } = this.state;
      return (
        <div id="band-setup-step-1">
          <Form
            loading={loading}
            onSubmit={this.handleSubmit}
          >
            <Form.Field>
              <Header as="h1">Enter band name</Header>
              <Input
                id="band-name-input"
                name="band-name"
                onChange={this.handleChange}
                maxLength="120"
                style={{ width: '300px' }}
              />
            </Form.Field>
            <Form.Button>Submit</Form.Button>
          </Form>
        </div>
      );
    }
}

StepFlow1.propTypes = {
  handleSubmitBandName: PropTypes.func.isRequired,
};

export default StepFlow1;
