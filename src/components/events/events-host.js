import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
// EventsHost
import EventsHostData from '../../../dummy_data/user-host-list';

class EventsHost extends Component {
    state = {
        hostEventsList: EventsHostData
    }

    render() {
        console.log('This is Data:', this.state);
        const { hostEventsList } = this.state;
        const eventId = this.state.hostEventsList;
        return (
            <div className='center'>
                <div className="header-container col s12">
                    <h1 className="">My Hosted Events</h1>
                </div>
                <div className="main-container">
                    {hostEventsList.map((event, index) => (
                        <Link to={'/events/'+eventId[index].eventID+'/host'} className="event-list-button nav-link btn center">
                            <div className="event-container" key={event.id} >
                                <div className="event-info-container">
                                    <span className="event-title">{event.gameTitle}</span>
                                    <br />
                                    <span className="event-player-count">Player Limit: {event.playerLimit}</span>
                                    <br />
                                    <span className="event-date-time">{event.date} {event.startTime}</span>
                                </div>
                                <div className="event-image center">
                                    <img src={event.gameImage} alt={event.gameTitle}></img>
                                </div >
                            </div>
                        </Link>))}
                </div>
            </div>
        )
    }
}



export default EventsHost;