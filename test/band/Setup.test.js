import React from 'react';
import {shallow} from 'enzyme';
import StepFlow1 from "../../src/band/setup_flow/1-Band-Name";
import "jest-enzyme";
import { Form } from 'semantic-ui-react'


describe("StepFlow1", () => {
    it("renders the form", () => {
        const wrapper = shallow(<StepFlow1/>);
        expect(wrapper).toContainReact(
            <div id="band-setup">
                <Form
                    loading={false}
                    onSubmit={wrapper.instance().handleSubmit}
                >
                    <Form.Field>
                        <label>Enter band name</label>
                        <input
                            name="band-name"
                            onChange={wrapper.instance().handleChange}
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
