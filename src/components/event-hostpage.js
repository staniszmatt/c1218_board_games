import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div>Host Event Game Page for Game 1 </div>
            <Link to="/events/id/host" className="nav-link">Edit Game</Link>
            <br/>
            <Link to="/profile" className="nav-link">YOUR PROFILE</Link>
        </div>

    );
}
