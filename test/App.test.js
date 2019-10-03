import React from 'react';
import App from '../src/App';
import {shallow} from 'enzyme';
import AppNavbar from "../src/global/AppNavbar";
import {Route} from "react-router";
import Discover from "../src/band/Discover";
import StepFlow1 from "../src/band/setup_flow/1-Band-Name";
import "jest-enzyme";


describe("App", () => {
    it("renders the navbar", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toContainReact(
            <AppNavbar
                leftItems={wrapper.instance().leftItems}
                rightItems={wrapper.instance().rightItems}
            >
            </AppNavbar>);
    });

    it("renders the routes", () => {
        const wrapper = shallow(<App/>);
        expect(wrapper).toContainReact(
            <div id="router content">
                <Route path="/" exact component={Discover}/>
                <Route path="/setup/" component={StepFlow1}/>
                <Route path="/discover/" component={Discover}/>
            </div>);
    });

});
