import React from 'react';
import { Link } from 'react-router-dom';

const EventRow = (props) => {
console.log("events-row ",props)
    const { startTime, endTime, date, gameTitle, id, playerLimit, playerCount } = props.event;

    if (parseInt(playerCount) < parseInt(playerLimit)){
        return (
            <div className="events-container col s12 l6 nav-link center" key={id} data-event-id={id} >
                <Link to={'/events/' + id} className="events-list-button" >
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">Players: {playerCount} out of {playerLimit}</p>
                    <p className="events-date-time">{date} {startTime} {endTime}</p>
                </Link>
            </div>      
        );
    } return(
        <div className="events-container s12 l6 nav-link center" key={id} data-event-id={id} >               
            <Link to={'/events/' + id} className="events-list-button">
                <p className="events-title">{gameTitle}</p>
                <p className="events-player-count">Game Is Full</p>
                <p className="events-date-time">{date} {startTime} {endTime}</p>
            </Link>
        </div>
    );

}

export default EventRow;