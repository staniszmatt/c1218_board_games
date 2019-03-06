import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/landingpage.css';



export default props => (
    <div className="back">
        <div className="landing-page-header center col s12">
            <h1>BOARD GAMERS</h1>
        </div>
        <div className="main-container center">
            <Link to="/events" className="play-button nav-link btn">Play Games</Link>
        </div>
    </div>
)