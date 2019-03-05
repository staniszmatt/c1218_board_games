import React from 'react';
import {Link} from 'react-router-dom';


const EventRow = (props) => {

    const { startTime, date, gameTitle, id, gameImage, playerLimit } = props.event;

    return (
            <Link to={'/events/' + id} className="event-list-button nav-link btn center">
                <div className="event-container" key={id} >
                    <div className="event-info-container">
                        <span className="event-title">{gameTitle}</span>
                        <br />
                        <span className="event-player-count">Player Limit: {playerLimit}</span>
                        <br />
                        <span className="event-date-time">{date} {startTime}</span>
                    </div>
                    <div className="event-image center">
                        <img src={gameImage} alt={gameTitle}></img>
                    </div >
                </div>
            </Link>
            );
}

export default EventRow;