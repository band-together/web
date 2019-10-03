import React from 'react';
import {Form, Header} from "semantic-ui-react";
import {SkillLevelSelector} from '../SkillLevelSelector';


export default class StepFlow6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            genres: [],
            inspirations: [],
            skillLevel: ""
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
            this.props.handleSubmitStyle(this.state.skillLevel, this.state.genres, this.state.inspirations);
        }, 400);
    };

    handleGenres = (event) => {
        this.setState({
            genres: event.target.value.split(",").map(item => item.trim()).filter(item => item)
        });
    };

    handleInspirations = (event) => {
        this.setState({
            inspirations: event.target.value.split(",").map(item => item.trim()).filter(item => item)
        });
    };

    handleSkillLevel = (skillLevel) => {
        if (this.state.skillLevel === skillLevel) {
            this.setState({
                skillLevel: ""
            });
        } else {
            this.setState({
                skillLevel: skillLevel
            });
        }
    };

    render() {
        const {loading, skillLevel} = this.state;

        return  <div id="band-setup-step-6">
            <Form
                loading={loading}
                onSubmit={this.handleSubmit}
            >
                <Header as="h1">Style and Goals</Header>
                <Form.Field>
                    <Header as="h3">Enter your genres</Header>
                    <input
                        name="band-genres"
                        onChange={this.handleGenres}
                    />
                </Form.Field>
                <Form.Field>
                    <Header as="h3">Enter your inspiration bands</Header>
                    <input
                        name="band-inspirations"
                        onChange={this.handleInspirations}
                    />
                </Form.Field>
                <Form.Field>
                    <SkillLevelSelector
                        handleSkillLevel={this.handleSkillLevel}
                        activeSkillLevel={skillLevel}
                    />
                </Form.Field>
                <Form.Button>Save</Form.Button>
            </Form></div>;
    }
}
