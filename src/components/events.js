import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/events.css';

export default (props) => {
    return (

        <div className='ceneter'>
            <div className="header-container col s12">
                <h1 className="">Available Events</h1>
            </div>
            <div className="main-container">

                <Link to="/events/id" className="nav-link">
                    <div className="event-container">
                        <div className="event-info-container">
                            <span className="event-title">Game 1 Title</span>
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


                <Link to="/events/id" className="nav-link">
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


                <Link to="/events/id" className="nav-link">
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
            <div className="foot-conatiner">
                <h3>nav</h3>
            </div>
        </div>
    );
}