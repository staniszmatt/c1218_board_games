import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/landingpage.css';



export default props => (
    <div className="main-div-wrapper">
        <div className="landing-page-header center col s12">
            <h1>BOARD GAMERS</h1>
        </div>
        <div className="landingpage-main-container center">
            <Link to="/events" className="center play-button">Play Games</Link>
        </div>
    </div>
)