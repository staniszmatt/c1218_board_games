import React from 'react';
import {Link} from 'react-router-dom';



export default props => (
    <div>
        <h1>Welcome to our site</h1>
        <Link to="/events" className="nav-link">Available Games</Link>
    </div>
)