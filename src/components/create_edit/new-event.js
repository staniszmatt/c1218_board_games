import React, { Component } from 'react';
import CreateEventForm from './new-event-form';
import axios from 'axios';


class NewEvent extends Component {

    handleSubmit = async (event) => {
        const formattedNewEvent = event; //event is being pulled from the form - follow that formatting
        console.log("Formatted Event: ",formattedNewEvent);

        formattedNewEvent.gameImages = '3241234';

        const resp = await axios.post('/api/events-new-event.php', formattedNewEvent);

        const eventID = resp.data.eventID;
        console.log("Resp: ",eventID);


        this.props.history.push(`events/${eventID}/host`);
    }



    render() {

        return (
            <div className="create-event-container create-event-container-btn">
                <h1 className="center create-event-name">Create Event</h1>
                <CreateEventForm onSubmit={this.handleSubmit} />
            </div>
        );

    }
}

export default NewEvent;



