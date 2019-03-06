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
        const resp = await axios.get('api/events-myevents.php?id=4');

        console.log('resp: ', resp);

        this.setState({
            userId: resp.event.eventID
        });
    }


    render() {
        const { userId } = this.state;
        const numberOfPlayers = userId.playerList.length;
        return (
            <div className="center">
                <div className="main-container">
                        <div className="btn game-picture center">
                            <img src={userId.gameImage}></img>
                        </div>
                        <div className="btn event-host grey ">Game: {userId.gameTitle}</div>
                        <div className="btn event-host grey darken-1">Host Name: {userId.playerList[0].userPlayerName}</div>


                        <div className="date grey">
                            <ul>
                                <li>Date: {userId.date}</li>
                                <li>Start: {userId.startTime}</li>
                            </ul>
                        </div>

                        <div className="btn address grey darken-1">
                            <ul>
                                <li>Address: {userId.location.streetAddress}</li>
                                <li>City: {userId.location.city}</li>
                                <li>State: {userId.location.state}</li>
                                <li>Zip: {userId.location.zipCode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers grey">
                            <div> {numberOfPlayers} Players out of {userId.playerLimit} have joined </div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <Link to={"/events/"+userId.eventID+"/player-list"} className="nav-link">Join Game</Link>
                        </div>
                </div>

            </div>
        );
    }
}

export default EventSelected;