import React from 'react';
import {shallow} from 'enzyme';
import StepFlow1 from "../../src/band/setup_flow/1-Band-Name";
import "jest-enzyme";
import {Form, Header, Input} from 'semantic-ui-react'

describe("StepFlow1", () => {
  it("renders the form", () => {
    const wrapper = shallow(<StepFlow1 handleSubmitBandName={() => {}} />);
    expect(wrapper).toContainReact(
      <div id="band-setup-step-1">
        <Form
          loading={false}
          onSubmit={wrapper.instance().handleSubmit}
        >
          <Form.Field>
            <Header as="h1">Enter band name</Header>
            <Input
              id="band-name-input"
              name="band-name"
              onChange={wrapper.instance().handleChange}
              maxLength="120"
              style={{ width: '300px' }}
            />
          </Form.Field>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>);
  });

  it("sends the input to API on submit", () => {
    // TODO
  });

  it("displays loading while waiting for API response", () => {
    // TODO
  });

  it("redirects the user to the profile setup flow on success", () => {
    // TODO
  });

  it("displays error when API returns an error", () => {
    // TODO
  });
});
