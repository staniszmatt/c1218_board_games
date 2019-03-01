import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div> PLayer List </div>
            <h1>joined</h1>
            <Link to="/profile" className="nav-link">YOUR PROFILE</Link>
        </div>

    );
}
