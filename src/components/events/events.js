import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventData from '../../../dummy_data/event';

class Events extends Component {
    state = {
        eventList: EventData
    }

    render() {
        console.log('This is Data:', this.state);
        const { eventList } = this.state;
        return (
            <div className='center'>
                <div className="header-container col s12">
                    <h1 className="">Available Events</h1>
                </div>
                <div className="main-container">
                    {eventList.map((event) => (
                        <Link to={'/events/' + event.id} className="event-list-button nav-link btn center">
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



export default Events;