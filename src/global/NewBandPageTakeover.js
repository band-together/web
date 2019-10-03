import React from 'react';
import {Modal, Image, Header, Button, Icon} from 'semantic-ui-react';

export const NewBandPageTakeover = ({closeModal, openModal, band}) => {

    return <Modal
        centered
        closeIcon
        closeOnDimmerClick
        onClose={closeModal}
        size="large"
        open={openModal}
    >
        <Modal.Header>Band created!</Modal.Header>
        <Modal.Content image>
            <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
            <Modal.Description>
                <Header as="h2">Recap</Header>
                <p>
                    <Header as="h3">Band Name</Header>
                    {band.bandName}
                </p>
                <p>
                    <Header as="h3">Your Roles</Header>
                    {band && band.userRoles && [...band.userRoles].join(", ")}
                </p>
                <p>
                    <Header as="h3">Other band members</Header>
                    {band && band.bandRoles && [...band.bandRoles].join(", ")}
                </p>
                <p>
                    <Header as="h3">Genres</Header>
                    {band && band.genres && [...band.genres].join(", ")}
                </p>
                <p>
                    <Header as="h3">Inspirations</Header>
                    {band && band.inspirations && [...band.inspirations].join(", ")}
                </p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <Button color='green' onClick={closeModal} inverted>
                <Icon name='checkmark' />Jammin'!
            </Button>
        </Modal.Actions>
    </Modal>
};