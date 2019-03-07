import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';


export default props => (
    <div>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/profile" className="btn nav-link center font-color: black profile-btn">Profile</Link>
            </li>

            <li className="nav-item">
                <Link to="/sign-out" className="btn nav-link  center font-color: red sign-out-btn">Sign Out</Link>
            </li>

            <li className="nav-item">
                <Link to="/events" className="btn nav-link  center font-color: black event-btn">Events</Link>
            </li>
        </ul>
    </div>
)