import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import MyEventData from '../../../dummy_data/user-joined-list';

class MyEvents extends Component {
    state = {
        myEventList: MyEventData
    }

    render() {
        console.log('This is Data:', this.state);
        const { myEventList } = this.state;
        const eventId = this.state.hostEventsList;
        return (
            <div className='center'>
                <div className="header-container col s12">
                    <h1 className="">My Events</h1>
                </div>
                <div className="main-container">
                    {myEventList.map((event, index) => (
                        <Link to={'/events/' + event.eventID} className="events-list-button nav-link btn center">
                            <div className="events-container" key={event.id} >
                                <div className="events-info-container">
                                    <span className="events-title">{event.gameTitle}</span>
                                    <br />
                                    <span className="events-player-count">Player Limit: {event.playerLimit}</span>
                                    <br />
                                    <span className="events-date-time">{event.date} {event.startTime}</span>
                                </div>
                                <div className="events-image center">
                                    <img src={event.gameImage} alt={event.gameTitle}></img>
                                </div >
                            </div>
                        </Link>))}
                </div>
            </div>
        )
    }
}



export default MyEvents;