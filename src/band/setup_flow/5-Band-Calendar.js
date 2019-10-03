import React from 'react';
import {Form} from "semantic-ui-react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);
const events = [
    {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
    }
];
export default class StepFlow5 extends React.Component {

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
            this.props.handleSubmitCalendar();
        }, 400);
    };

    render() {
        const {loading} = this.state;

        return  <div id="band-setup-step-5">
            <Calendar
                localizer={localizer}
                events={events}
                defaultDate={new Date()}
                defaultView="month"
                startAccessor="start"
                endAccessor="end"
                style={{ height: "100vh" }}
            />
            <br/>
            <br/>
            <br/>
            <Form
                loading={loading}
                onSubmit={this.handleSubmit}
            >
                <Form.Button>Save</Form.Button>
            </Form></div>;
    }
}
