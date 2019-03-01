import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <h1 className="center"> Profile Page </h1>
            <div className="center"> User Profile Picture here</div>
            <div className="center"> Scott Bowler</div>
            <div className="center">
                <div>
                    <Link to="/events/new-event" className="nav-link red black-text">Create Event</Link>
                </div>

                <div>
                    <Link to="/events" className="nav-link blue black-text">View Available Events</Link>
                </div>

                <div>
                    <Link to="/events/host" className="nav-link red black-text">My Hosted Events</Link>
                </div>

                <div>
                    <Link to="/events/myevents" className="nav-link blue black-text">My Joined Events</Link>
                </div>
            </div>

        </div>

    );
}










