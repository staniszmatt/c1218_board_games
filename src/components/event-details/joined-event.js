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
                <div className="loading-screen-container">
                    <div className='center loading-screen-text'>Page Is Loading...</div>
                    <div className="loading-screen-container preloader-wrapper big active test">
                        <div className="spinner-layer spinner-blue-only">
                            <div className="circle-clipper left">
                                <div className="circle"></div>
                            </div><div className="gap-patch">
                                <div className="circle"></div>
                            </div><div className="circle-clipper right">
                                <div className="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        const numberOfPlayers = eventId.playerCount;
        if (numberOfPlayers >= parseInt(eventId.playerLimit)) {
            return (
                <div className="playerlist-container">
                    <div className="page-header player-list-title center">
                        <div className="event-host header-container">Game: {eventId.gameTitle}</div>
                        <div className="event-border event-host player-list-address">Host Name: {eventId.playerName}</div>
                        <div className="event-border center player-list-address">
                            <ul>
                                <li>Date: {eventId.date}</li>
                                <li>Start: {eventId.startTime}</li>
                            </ul>
                        </div>

                        <div className="event-border center player-list-address">
                            <ul>
                                <li>Address: {eventId.location.streetAddress}</li>
                                <li>City: {eventId.location.city}</li>
                                <li>State: {eventId.location.state}</li>
                                <li>Zip: {eventId.location.zipCode}</li>
                            </ul>
                        </div>

                        <div className="event-border center player-list-limit">
                            <div> Event is Full</div>
                        </div>

                        <div className="center back">
                            <button className="btn center back-to-game" onClick={this.sendUserData}>Leave Game</button>

                        </div>
                    </div>
                </div>
            );
        } return (
            <div className="playerlist-container">
                <div className="page-header player-list-title center">
                    <div className="event-host header-container">Game: {eventId.gameTitle}</div>
                    <div className="event-border event-host player-list-address">Host Name: {eventId.playerName}</div>
                    <div className="event-border center player-list-address">
                        <ul>
                            <li>Date: {eventId.date}</li>
                            <li>Start: {eventId.startTime}</li>
                        </ul>
                    </div>

                    <div className="event-border center player-list-address">
                        <ul>
                            <li>Address: {eventId.location.streetAddress}</li>
                            <li>City: {eventId.location.city}</li>
                            <li>State: {eventId.location.state}</li>
                            <li>Zip: {eventId.location.zipCode}</li>
                        </ul>
                    </div>

                    <div className="event-border center player-list-limit">
                        <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                    </div>

                    <div className="center back">
                        <Link className="btn center back-to-game" to={"/events"}>Leave Game</Link>
                    </div>
                </div>
            </div>
        );
    }

}


export default JoinedEventDetails;