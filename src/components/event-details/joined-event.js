import React from 'react';
import {Link} from 'react-router-dom';



export default props => (
    <div>
        <h1>This Is a Game you have joined</h1>
        <Link to="/profile" className="nav-link">Leave Game</Link>
    </div>
)