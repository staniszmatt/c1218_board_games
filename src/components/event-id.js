import React from 'react';
import {Link} from 'react-router-dom';



export default props => (

    <div className="center">
        <h1 > Event Information</h1>

        <div>
            <div className="event-host grey darken-1">Host: Topher Uchiha</div>

            <div className="event-host grey ">Game Title: Magic The Gathering</div>

            <div className="date green">
                <ul>
                    <li>Date: 4-20-1984</li>
                    <li>Time: 1:00P.M.</li>
                </ul>
            </div>

            <div className="address yellow">
                <ul>
                    <li>Address: Some Address</li>
                    <li>City: Beverly Hills</li>
                    <li>State: CA</li>
                    <li>Zip: 90210</li>
                </ul>
            </div>

            <div className=" numberOfPlayers red">
                <div> 4 Players out of 6 have joined </div>
            </div>

            <button className="joinButton purple lighten-1">
                <Link to="/events/id/player-list" className="nav-link">Join Game - player List</Link>
            </button>

        </div>

    </div>
)