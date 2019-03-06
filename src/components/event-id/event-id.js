import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './event-id.css';
import EventData from '../../../dummy_data/event-eventID-edit';
import axios from 'axios';


class EventSelected extends Component {
    state = {
        eventId: []
    }

    componentDidMount(){
        this.getEventId();

    }

    async getEventId (){
        const resp = await axios.get('/api/events-eventID.php');

        console.log('resp: ', resp);

        this.setState({
            eventId: resp.data.eventID
        });
    }


    render() {
        const { eventId } = this.state;
        const numberOfPlayers = eventId.playerList.length;
        return (
            <div className="center">
                <div className="main-container">
                        <div className="btn game-picture center">
                            <img src={eventId.gameImage}></img>
                        </div>
                        <div className="btn event-host grey ">Game: {eventId.gameTitle}</div>
                        <div className="btn event-host grey darken-1">Host Name: {eventId.playerList[0].userPlayerName}</div>


                        <div className="date grey">
                            <ul>
                                <li>Date: {eventId.date}</li>
                                <li>Start: {eventId.startTime}</li>
                            </ul>
                        </div>

                        <div className="btn address grey darken-1">
                            <ul>
                                <li>Address: {eventId.location.streetAddress}</li>
                                <li>City: {eventId.location.city}</li>
                                <li>State: {eventId.location.state}</li>
                                <li>Zip: {eventId.location.zipCode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers grey">
                            <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <Link to={"/events/"+eventId.eventID+"/player-list"} className="nav-link">Join Game</Link>
                        </div>
                </div>

            </div>
        );
    }
}

export default EventSelected;