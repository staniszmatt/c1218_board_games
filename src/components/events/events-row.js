import React from 'react';
import {Link} from 'react-router-dom';


const EventRow = (props) => {

    const { startTime, date, gameTitle, id, gameImage, playerLimit } = props.event;

    return (
            <Link to={'/events/' + id} className="events-list-button nav-link btn center">
                <div className="events-container" key={id} >
                    <div className="events-info-container">
                        <span className="events-title">{gameTitle}</span>
                        <br />
                        <span className="events-player-count">Player Limit: {playerLimit}</span>
                        <br />
                        <span className="events-date-time">{date} {startTime}</span>
                    </div>
                    <div className="events-image center">
                        <img src={gameImage} alt={gameTitle}></img>
                    </div >
                </div>
            </Link>
            );
}

export default EventRow;