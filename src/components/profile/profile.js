import React from 'react';
import { Link } from 'react-router-dom';
import './profile.css';

export default (props) => {
    return (
        <div className="center">
            <div className="center user-info">
                <div className="center profile-image"> User Profile Picture here</div>
                <div className="center"> Scott Bowler</div>
                <div className="center"></div>
            </div>
            <div className="profile-button-container center">
            <div>
                    <Link to="/events/new-event" className="btn nav-link red black-text">Create Event</Link>
                </div>

                <div>
                    <Link to="/events" className="btn nav-link blue black-text">View Available Events</Link>
                </div>

                <div>
                    <Link to="/events/host" className="btn nav-link red black-text">My Hosted Events</Link>
                </div>

                <div>
                    <Link to="/events/myevents" className="btn nav-link blue black-text">My Joined Events</Link>
                </div>
            </div>
            </div>
    );
}










