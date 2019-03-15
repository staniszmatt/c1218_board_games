import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../event-id/event-id.css';
import './joined-events.css';
import axios from 'axios';


class JoinedEventDetails extends Component {
    state = {
        eventId: null,
    }


    async componentDidMount() {
        const ID = this.props.match.params.id;

        const resp = await axios.get(`/api/events-eventID.php?eventID=${ID}`);
        this.setState({
            eventId: resp.data.event
        });
    }


    render() {
        const { eventId } = this.state;

        if (eventId === null) {
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <p>Page is Loading...</p>
                        </div>
                    </div>
                </div>
            );
        }

        const numberOfPlayers = eventId.playerList.length;
        if (numberOfPlayers >= parseInt(eventId.playerLimit)) {
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <img src={eventId.gameImages}></img>
                        </div>
                        <div className="btn event-host">Game: {eventId.gameTitle}</div>
                        <div className="btn event-host">Host Name: {eventId.playerList[0].playerName}</div>


                        <div className="date grey">
                            <ul>
                                <li>Date: {eventId.date}</li>
                                <li>Start: {eventId.startTime}</li>
                            </ul>
                        </div>

                        <div className="btn address">
                            <ul>
                                <li>Address: {eventId.location.streetAddress}</li>
                                <li>City: {eventId.location.city}</li>
                                <li>State: {eventId.location.state}</li>
                                <li>Zip: {eventId.location.zipCode}</li>
                            </ul>
                        </div>

                        <div className="numberOfPlayers">
                            <div> Event is Full</div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <button className="btn" onClick={this.sendUserData}>Leave Game</button>

                        </div>
                    </div>
                </div>
            );
        } return (
            <div className="center">
                <div className="main-container-event">
                    <div className="btn game-picture center">
                        <img src={eventId.gameImages}></img>
                    </div>
                    <div className="btn event-host">Game: {eventId.gameTitle}</div>
                    <div className="btn event-host">Host Name: {eventId.playerList[0].playerName}</div>
                    <div className="date">
                        <ul>
                            <li>Date: {eventId.date}</li>
                            <li>Start: {eventId.startTime}</li>
                        </ul>
                    </div>

                    <div className="btn address">
                        <ul>
                            <li>Address: {eventId.location.streetAddress}</li>
                            <li>City: {eventId.location.city}</li>
                            <li>State: {eventId.location.state}</li>
                            <li>Zip: {eventId.location.zipCode}</li>
                        </ul>
                    </div>

                    <div className="numberOfPlayers">
                        <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                    </div>

                    <div className="btn join-game-button green">
                        <Link className="btn" to={"/events"}>Leave Game</Link>
                    </div>
                </div>
            </div>
        );
    }

}


export default JoinedEventDetails;