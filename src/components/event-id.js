import React from 'react';
import {Link} from 'react-router-dom';



export default props => (
    <div>
        <h1>This Is a Game Event with ID</h1>
        <Link to="/events/id/player-list" className="nav-link">Join Game - player List</Link>
    </div>
)