import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div>My UPcoming Hosted Events</div>
            <Link to="/events/id/host" className="nav-link">Game 1</Link>
            <h1>game 2</h1>
            <Link to="/profile" className="nav-link">YOUR PROFILE</Link>
        </div>

    );
}
