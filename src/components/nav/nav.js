import React from 'react';
import {Link} from 'react-router-dom';
import './nav.css';


export default props => (
    <div>
        <ul className="nav">
            <li className="nav-item">
                <Link to="/profile" className="btn nav-link pulse center font-color: black">Profile</Link>
            </li>
            <li className="nav-item">
                <button to="" className="nav-link center font-color: white">close nav</button>
            </li>

            <li className="nav-item">
                <Link to="/events" className="btn nav-link pulse center font-color: black">Events</Link>
            </li>
        </ul>
    </div>
)