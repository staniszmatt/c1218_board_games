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
    sendUserData = async ()=> {
        const resp = await axios.post(`/api/events-id-join.php`,{
            userID: 5,
            eventID: this.props.match.params.id
        });

        this.props.history.push("/events/" + this.state.eventId + "/player-list")
    }
    render() {
        const { eventId } = this.state;

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
            if(numberOfPlayers >= eventId.playerLimit){
                return (
                    <div className="center">
                        <div className="main-container-event">
                            <div className="btn game-picture center">
                                <img src={eventId.gameImages}></img>
                            </div>
                            <div className="btn event-host grey ">Game: {eventId.gameTitle}</div>
                            <div className="btn event-host grey darken-1">Host Name: {eventId.playerList[0].playerName}</div>


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
                                    <li>Zip: {eventId.location.zipcode}</li>
                                </ul>
                            </div>

                            <div className=" numberOfPlayers grey">
                                <div> Game Is Full!</div>
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
                        <div className="btn event-host grey ">Game: {eventId.gameTitle}</div>
                        <div className="btn event-host grey darken-1">Host Name: {eventId.playerList[0].playerName}</div>


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
                                <li>Zip: {eventId.location.zipcode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers grey">
                            <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <button className="btn join-game-button" onClick={this.sendUserData}>Join Game</button>
                            {/* <Link onClick={this.sendUserData} to={"/events/" + eventId.eventID + "/player-list"} className="nav-link">Join Game</Link> */}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default EventSelected;