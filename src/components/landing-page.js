import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/landingpage.css';



export default props => (
    <div>
        <div className="landing-page-header center col s12 green">
            <h1>BOARD GAMERS</h1>
        </div>
        <div className="main-continer center grey">
            <Link to="/events" className="play-button nav-link btn">Play Games</Link>
        </div>
    </div>
)