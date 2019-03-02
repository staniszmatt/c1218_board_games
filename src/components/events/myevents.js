import React from 'react';
import { Link } from 'react-router-dom';
import './events.css';

export default (props) => {
    return (
        <div className='center'>
            <div className="header-container col s12">
                <h1 className="">My Events</h1>
            </div>
            <div className="main-container">
                <Link to="/events/id" className="event-list-button nav-link btn center">
                    <div className="event-container">
                        <div className="event-info-container">
                            <span className="event-title">Game 1 Title</span>
                            <br />
                            <span className="event-player-count">PlayerCount Here</span>
                            <br />
                            <span className="event-date-time">Event Time here Here</span>
                        </div>
                        <div className="event-image center">
                            <span>picture here</span>
                        </div >
                    </div>
                </Link>
                <Link to="/events/id" className="event-list-button nav-link btn">
                <div className="event-container">
                        <div className="event-info-container">
                            <span className="event-title">Game 2 Title</span>
                            <br />
                            <span className="event-player-count">PlayerCount Here</span>
                            <br />
                            <span className="event-date-time">Event Time here Here</span>
                        </div>
                        <div className="event-image">
                            <span>picture here</span>
                        </div >
                    </div>
                </Link>
                <Link to="/events/id" className="event-list-button nav-link btn">
                <div className="event-container">
                        <div className="event-info-container">
                            <span className="event-title">Game 3 Title</span>
                            <br />
                            <span className="event-player-count">PlayerCount Here</span>
                            <br />
                            <span className="event-date-time">Event Time here Here</span>
                        </div>
                        <div className="event-image">
                            <span>picture here</span>
                        </div >
                    </div>
                </Link>
            </div>
        </div>
    );
}