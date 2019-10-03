import {Card, Image, Button} from "semantic-ui-react";
import React from "react";

export const BandMemberCard = ({role, name, description, skill}) =>
<Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
        <Card.Header>{role}</Card.Header>
        {name === "You" ? <Card.Meta>{name}</Card.Meta> : <Button basic color='green'>
                Invite Friend for Role
            </Button>}
        <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
        {skill}
    </Card.Content>
</Card>;