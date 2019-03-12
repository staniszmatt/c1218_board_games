import React from 'react';
import { Link } from 'react-router-dom';


const EventRow = (props) => {

    const { startTime, date, gameTitle, id, gameImages, playerLimit, playerCount } = props.event;
    if (playerCount < playerLimit){
        return (
            <Link to={'/events/' + id} className="events-list-button nav-link btn center">
                <div className="events-container" key={id} data-event-id={id} >
                    <div className="events-info-container">
                        <p className="events-title">{gameTitle}</p>
                        <p className="events-player-count">Players: {playerCount} out of {playerLimit}</p>
                        <p className="events-date-time">{date} {startTime}</p>
                    </div>
                    <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center">
                    </div >
                </div>
            </Link>
        );
    } return(
        <Link to={'/events/' + id} className="events-list-button nav-link btn center">
            <div className="events-container" key={id} data-event-id={id} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">EVENT IS FULL</p>
                    <p className="events-date-time">{date} {startTime}</p>
                </div>
                <div style={{ backgroundImage: "url(" + gameImages + ")" }} className="events-image center">
                </div >
            </div>
        </Link>
    );

}

export default EventRow;