import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <h1>My Upcoming Events</h1>
                <Link to="/events/myevents/id" className="nav-link">Game 1</Link>
            <h1>game2</h1>
                <Link to="/events/myevents/id" className="nav-link">Game 2</Link>
        </div>

    );
}
