import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/landingpage.css';



export default props => (
    <div className="main-div">
        <div className="landing-page-header center col s12">
            <div className="header-name">Board Gamers</div>
        </div>
        <div className="landingpage-main-container center">
            <Link to="/events" className="center play-button">PLAY</Link>
        </div>
    </div>
)