import React, { Component } from 'react';
import CreateEventForm from './new-event-form';
import axios from 'axios';
import './create-form.css';


class NewEvent extends Component {

    handleSubmit = async (event) => {
        event.endTime += ":00";
        event.startTime += ":00";
        const formattedNewEvent = event; //event is being pulled from the form - follow that formatting
        const resp = await axios.post('/api/events-new-event.php', formattedNewEvent);
        const eventID = resp.data.eventID;
        this.props.history.push(`events/${eventID}/host`);
    }

    render() {

        return (
            <div className="create-event-container create-event-container-btn">
                <div className="header-events-container col s12 ">
                    <h1 className="center create-event-name">Create Event</h1>
                    </div>
                <CreateEventForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default NewEvent;



