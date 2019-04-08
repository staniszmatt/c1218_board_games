import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './event-id.css';
import axios from 'axios';
import BoardGamePic from '../../assets/images/boardgame_default.jpg';

class EventSelected extends Component {
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

    sendUserData = async () => {
        const resp = await axios.post(`/api/events-id-join.php`, {
            eventID: this.props.match.params.id
        });

        this.props.history.push("/events/" + this.props.match.params.id + "/player-list")
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
        } else {
            const numberOfPlayers = eventId.playerCount;
            if (numberOfPlayers >= parseInt(eventId.playerLimit)) {
                return (
                    <div className="center">
                        <div className="event-details center">
                            <h1>Event Details</h1>
                        </div>
                        <div className="main-container-event">
                            <div className="event-host">
                                <h3>
                                    Game: {eventId.gameTitle}
                                </h3>
                            </div>
                            <div className="btn event-host">Host Name: {eventId.playerName}</div>
                            <div className="date event-host">
                                <ul>
                                    <li>Date: {eventId.date}</li>
                                    <li>Start: {eventId.startTime}</li>
                                </ul>
                            </div>
                            <div className="address event-host">
                                <ul>
                                    <li>Address: {eventId.location.streetAddress}</li>
                                    <li>City: {eventId.location.city}</li>
                                    <li>State: {eventId.location.state}</li>
                                    <li>Zip: {eventId.location.zipcode}</li>
                                </ul>
                            </div>
                            <div className="numberOfPlayers event-host">
                                <div className="full"> Game Is Full!</div>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <div className="center">
                    <div className="event-details">
                        <h1>Event Details</h1>
                    </div>
                    <div className="main-container-event">
                        <div className="event-host">
                            <h3>
                                Game: {eventId.gameTitle}
                            </h3>
                        </div>
                        <div className="event-host">
                            <h6>
                                Host Name: {eventId.playerName}
                            </h6>
                        </div>
                        <div className="date event-host">
                            <h6>
                                <ul>
                                    <li>Date: {eventId.date}</li>
                                    <li>Start: {eventId.startTime}</li>
                                </ul>
                            </h6>
                        </div>
                        <div className="address event-host">
                            <h6>
                                <ul>
                                    <li>Address: {eventId.location.streetAddress}</li>
                                    <li>City: {eventId.location.city}</li>
                                    <li>State: {eventId.location.state}</li>
                                    <li>Zip: {eventId.location.zipcode}</li>
                                </ul>
                            </h6>
                        </div>
                        <div className="numberOfPlayers event-host">
                            <h6>
                                <Link to={'/events/' + eventId.eventID + '/player-list'}>
                                    <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                                </Link>
                            </h6>
                        </div>
                            <Link className="btn join-game-button" onClick={this.sendUserData} to={'/events/' + eventId.eventID+'/player-list'}>Join Game</Link>
                    </div>
                </div>
            );
        }
    }
}

export default EventSelected;