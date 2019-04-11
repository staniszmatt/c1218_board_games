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
            <div className="main-container">
                <div className="header-container">
                    <h1> CREATE EVENT</h1>
                </div>
                <div className="content-container ">
                <CreateEventForm onSubmit={this.handleSubmit} />
                </div>
            </div>
        );
    }
}

export default NewEvent;



