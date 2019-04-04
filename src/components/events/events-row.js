import React from 'react';
import { Link } from 'react-router-dom';
import BoardGamePic from '../../assets/images/boardgame_default.jpg';


const EventRow = (props) => {

    const { startTime, date, gameTitle, id, playerLimit, playerCount } = props.event;

    if (parseInt(playerCount) < parseInt(playerLimit)){
        return (
            <Link to={'/events/' + id} className="col s12 l6 events-list-button nav-link center ">
                <div className="events-container " key={id} data-event-id={id} >
                    <div className="events-info-container">
                        <p className="events-title">{gameTitle}</p>
                        <p className="events-player-count">Players: {playerCount} out of {playerLimit}</p>
                        <p className="events-date-time">{date} {startTime}</p>
                    </div>
                </div>
            </Link>
        );
    } return(
        <Link to={'/events/' + id} className="col s12 l6 events-list-button nav-link center">
            <div className="events-container" key={id} data-event-id={id} >
                <div className="events-info-container">
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">EVENT IS FULL</p>
                    <p className="events-date-time">{date} {startTime}</p>
                </div>
            </div>
        </Link>
    );

}

export default EventRow;