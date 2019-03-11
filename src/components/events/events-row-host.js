import React from 'react';
import { Link } from 'react-router-dom';


const EventRowHost = (props) => {

    const { startTime, date, gameTitle, eventID, gameImages, playerLimit } = props.event;

    return (
        <Link to={'/events/' + eventID + '/host'} className="events-list-button nav-link btn center">
            <div className="events-container" key={eventID} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>

                    <p className="events-player-count">Player Limit: {playerLimit}</p>

                    <p className="events-date-time">{date} {startTime}</p>
                </div>
                <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center"></div>
            </div>
        </Link>
    );
}

export default EventRowHost;