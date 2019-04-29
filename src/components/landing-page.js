import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/landingpage.css';



export default props => (
    <div className="main-container">
        <div className="header-container col s12">
            <h1>BOARD GAMERS</h1>
        </div>
        <div className="landing-page-main-container center">
            <Link to="/events" className="center play-button">Play Games</Link>
        </div>
    </div>
)