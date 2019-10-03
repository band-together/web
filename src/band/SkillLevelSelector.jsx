import React, {Fragment} from "react";
import {Card, Grid, Header, Image} from "semantic-ui-react";


const skillText = {
    Beginner: "We want to play in our garages.",
    Intermediate: "We want to play open mics.",
    Advanced: "We want to play small gigs.",
    Professional: "We want to record and perform professionally."
};

export const SkillLevelSelector = ({ handleSkillLevel, skillLevel }) =>
    <Fragment>
        <Header as="h3">What's your target skill level?</Header>
        <Grid columns='two' divided>
            <Grid.Row>
                <Grid.Column>
                    <Card
                        onClick={() => handleSkillLevel("Beginner")}
                        color={skillLevel === "Beginner" ? "green" : "black"}
                        raised={skillLevel === "Beginner"}
                    >
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Beginner</Card.Header>
                            <Card.Description>
                                {skillText["Beginner"]}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card
                        onClick={() => handleSkillLevel("Intermediate")}
                        color={skillLevel === "Intermediate" ? "green" : "black"}
                        raised={skillLevel === "Intermediate"}
                    >
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Intermediate</Card.Header>
                            <Card.Description>
                                {skillText["Intermediate"]}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card
                        onClick={() => handleSkillLevel("Advanced")}
                        color={skillLevel === "Advanced" ? "green" : "black"}
                        raised={skillLevel === "Advanced"}
                    >
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Advanced</Card.Header>
                            <Card.Description>
                                {skillText["Advanced"]}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
                <Grid.Column>
                    <Card
                        onClick={() => handleSkillLevel("Professional")}
                        color={skillLevel === "Professional" ? "green" : "black"}
                        raised={skillLevel === "Professional"}
                    >
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                            <Card.Header>Professional</Card.Header>
                            <Card.Description>
                                {skillText["Professional"]}
                            </Card.Description>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Fragment>;