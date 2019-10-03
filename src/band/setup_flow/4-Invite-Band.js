import React from 'react';
import {Header, Form, Item} from 'semantic-ui-react';
import {BandMemberCard} from "./BandMemberCard";
import {InviteBandMemberItem} from "./InviteBandMemberItem";


export default class StepFlow4 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            userRoles: this.props.userRoles,
            bandRoles: this.props.bandRoles
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
            this.props.handleSubmitBandMembers();
        }, 400);
    };

    render() {
        const {loading, userRoles, bandRoles} = this.state;
        return <div id="band-setup-step-4">
            <Form
                loading={loading}
                onSubmit={this.handleSubmit}
            >
                <Header as="h1">Assign roles</Header>
                {userRoles && [...userRoles].map((role, position) =>
                <BandMemberCard
                    role={role}
                    name="You"
                    skill="Beginner"
                    description="Lorem ipsum"
                    key={`you-${role}-${position}`}
                />
                )}
                <Item.Group link>
                    {bandRoles && bandRoles.map((role, i) =>
                        <InviteBandMemberItem
                            role={role}
                            skill="Beginner"
                            key={`member-${role}-${i}`}
                        />
                    )}
                </Item.Group>
                <Form.Button>Save</Form.Button>
            </Form>
        </div>;
    }

}
