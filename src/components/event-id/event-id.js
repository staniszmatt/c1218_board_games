import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './event-id.css';
import axios from 'axios';


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
            userID: 5,
            eventID: this.props.match.params.id
        });

        this.props.history.push("/events/" + this.props.match.params.id + "/player-list")
    }
    render() {
        const { eventId } = this.state;
        console.log(eventId)
        if (eventId === null) {
            return (
                <div className="center">
                    <div className="main-container-event">
                        <div className="btn game-picture center">
                            <p>Page is Loading...</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            const numberOfPlayers = eventId.playerList.length;
            if (numberOfPlayers >= eventId.playerLimit) {
                return (
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
                                    <li>Zip: {eventId.location.zipcode}</li>
                                </ul>
                            </div>

                            <div className=" numberOfPlayers">
                                <div className="full"> Game Is Full!</div>
                            </div>

                        </div>
                    </div>
                );
            }
            return (
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
                                <li>Zip: {eventId.location.zipcode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers">
                            <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                        </div>


                            <Link className="btn join-game-button green pulse" onClick={this.sendUserData} to={'/events/' + eventId.eventID+'/player-list'}>Join Game</Link>

                    </div>
                </div>
            );
        }

    }
}

export default EventSelected;