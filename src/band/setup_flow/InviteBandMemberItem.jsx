import React from 'react';
import {Item} from 'semantic-ui-react';

export const InviteBandMemberItem = ({role, skill}) =>
    <Item>
        <Item.Image size='tiny' src='https://react.semantic-ui.com/images/avatar/large/stevie.jpg' />
        <Item.Content>
            <Item.Header>{role}</Item.Header>
            <Item.Meta>{skill}</Item.Meta>
            <Item.Description as="a">Invite Friend for Role</Item.Description>
        </Item.Content>
    </Item>
;