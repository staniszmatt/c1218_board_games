import React from 'react';
import {Link} from 'react-router-dom';
import './event-id.css';


export default props => (

    <div className="center">

        <div className="main-container">
            <div className="btn game-picture center">Image Place Holder</div>
            <div className="btn event-host grey ">Game Title: Magic The Gathering</div>
            <div className="btn event-host grey darken-1">Host: Topher Uchiha</div>


            <div className="date grey">
                <ul>
                    <li>Date: 4-20-1984</li>
                    <li>Time: 1:00P.M.</li>
                </ul>
            </div>

            <div className="btn address grey darken-1">
                <ul>
                    <li>Address: Some Address</li>
                    <li>City: Beverly Hills</li>
                    <li>State: CA</li>
                    <li>Zip: 90210</li>
                </ul>
            </div>

            <div className=" numberOfPlayers grey">
                <div> 4 Players out of 6 have joined </div>
            </div>

            <div className="center joinButton green lighten-4">
                <Link to="/events/id/player-list" className="nav-link">Join Game</Link>
            </div>

        </div>

    </div>
)