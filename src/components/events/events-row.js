import React from 'react';
import { Link } from 'react-router-dom';


const EventRow = (props) => {

    const { startTime, date, gameTitle, id, gameImages, playerLimit } = props.event;

    return (
        <Link to={'/events/' + id} className="events-list-button nav-link btn center">
            <div className="events-container" key={id} data-event-id={id} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">Player Limit: {playerLimit}</p>
                    <p className="events-date-time">{date} {startTime}</p>
                </div>
                <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center">
                    {/* <div style={{ backgroundImage: "url(" + gameImages + ")" }} alt={gameTitle}></div> */}
                    {/* <img src={gameImages} alt={gameTitle}></img> */}
                </div >
            </div>
        </Link>
    );
}

export default EventRow;