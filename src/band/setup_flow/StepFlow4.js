import React from 'react';
import { Header } from 'semantic-ui-react';
import {BandMemberCard} from "./BandMemberCard";


export default class StepFlow4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userRoles: this.props.userRoles,
            bandRoles: this.props.bandRoles
        };
    }

    render() {
        const {userRoles, bandRoles} = this.state;
        return <div id="band-setup-step-4">
            <Header as="h1">Complete roles</Header>
            {userRoles && [...userRoles].map((role, position) =>
                <BandMemberCard
                    role={role}
                    name="You"
                    skill="Beginner"
                    description="Lorem ipsum"
                    key={`you-${role}-${position}`}
                />
            )}
            {bandRoles && bandRoles.map((role, i) =>
                <BandMemberCard
                    role={role}
                    name="Open"
                    skill="Beginner"
                    description="Lorem ipsum"
                    key={`member-${role}-${i}`}
                />
            )}
        </div>;
    }

}
