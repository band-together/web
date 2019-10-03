import React from 'react';
import {Header, Form, Item, Grid} from 'semantic-ui-react';
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
                <Grid columns='three' divided>
                    <Header as="h1">Your roles</Header>
                    <Grid.Row>
                        {userRoles && [...userRoles].map((role, position) =>
                            <Grid.Column
                                key={`you-${role}-${position}`}
                            >
                                <BandMemberCard
                                    role={role}
                                    name="You"
                                    skill="Beginner"
                                    description="Lorem ipsum"
                                />
                            </Grid.Column>
                        )}
                    </Grid.Row>
                    <Header as="h1">Invite bandmates</Header>
                    <Grid.Row>

                            {bandRoles && bandRoles.map((role, i) =>
                                <Grid.Column
                                    key={`member-${role}-${i}`}
                                >
                                <Item.Group link>
                                <InviteBandMemberItem
                                        role={role}
                                        skill="Beginner"
                                    />
                                </Item.Group>
                                </Grid.Column>
                            )}
                    </Grid.Row>
                    <Form.Button>Save</Form.Button>
                </Grid>
            </Form>
        </div>;
    }

}
