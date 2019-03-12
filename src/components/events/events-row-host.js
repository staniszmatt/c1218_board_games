import React from 'react';
import { Link } from 'react-router-dom';


const EventRowHost = (props) => {

    const { startTime, date, gameTitle, eventID, gameImages, playerLimit, playerCount } = props.event;

    if (playerCount < playerLimit) {
    return (
        <Link to={'/events/' + eventID + '/host'} className="events-list-button nav-link btn center">
            <div className="events-container" key={eventID} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>

                    <p className="events-player-count">Players: {playerCount} out of {playerLimit}</p>

                    <p className="events-date-time">{date} {startTime}</p>
                </div>
                <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center"></div>
            </div>
        </Link>
    );
    }
    return(
        <Link to={'/events/' + eventID + '/host'} className="events-list-button nav-link btn center">
            <div className="events-container" key={eventID} data-event-id={eventID} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">EVENT IS FULL</p>
                    <p className="events-date-time">{date} {startTime}</p>
                </div>
                <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center">
                </div >
            </div>
        </Link >
    )
}

export default EventRowHost;