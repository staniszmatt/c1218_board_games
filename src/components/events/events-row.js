import React from 'react';
import { Link } from 'react-router-dom';
import timeTo12Hours from '../../helper/timeTo12Hours';

const EventRow = (props) => {
    const { startTime, endTime, date, gameTitle, id, playerLimit, playerCount } = props.event;
    
    if (parseInt(playerCount) < parseInt(playerLimit)){
        if (props.event){
            const startTime12H = timeTo12Hours(startTime);
            const endTime12H = timeTo12Hours(endTime);

            return (
                <div className="events-container col s12 l6 nav-link center" key={id} data-event-id={id} >
                    <Link to={'/events/' + id} className="events-list-button" >
                        <p className="events-title">{gameTitle}</p>
                        <p className="events-player-count">Players: {playerCount} out of {playerLimit}</p>
                        <p className="events-date-time">{date} {startTime12H} {endTime12H}</p>
                    </Link>
                </div>      
            );
        }
    } 
    
    if (props.event){
        const startTime12H = timeTo12Hours(startTime);
        const endTime12H = timeTo12Hours(endTime);

        return(
            <div className="events-container s12 l6 nav-link center" key={id} data-event-id={id} >               
                <Link to={'/events/' + id} className="events-list-button">
                    <p className="events-title">{gameTitle}</p>
                    <p className="events-player-count">Game Is Full</p>
                    <p className="events-date-time">{date} {startTime12H} {endTime12H}</p>
                </Link>
            </div>
        );
    }
}

export default EventRow;