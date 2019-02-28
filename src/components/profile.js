import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div> Profile </div>
            <Link to="/events/new-event" className="nav-link">Create Event</Link>
            <Link to="/events" className="nav-link">View Available Events</Link>
            <Link to="/events/host" className="nav-link">My Hosted Events</Link>
            <Link to="/events/myevents" className="nav-link">My Joined Events</Link>
            
        </div>

    );
}
