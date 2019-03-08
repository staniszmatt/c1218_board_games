import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './event-id.css';
import EventData from '../../../dummy_data/event-eventID-edit';
import axios from 'axios';


class EventSelected extends Component {
    state = {
        event: null
    }

    async componentDidMount() {
        const ID = this.props.match.params.id;

        const resp = await axios.get(`/api/events-eventID.php?eventID=${ID}`);

        this.setState({
            event: resp.data.event
        });
    }

    sendUserData = async ()=> {
        const resp = await axios.post(`/api/events-id-join.php`,{
            userID: 5,
            eventID: this.props.match.params.id
        });

        console.log("Sent Player Response ", resp);

        this.props.history.push("/events/" + this.state.event.eventID + "/player-list")
    }
    render() {
        const { event } = this.state;

        if (event === null) {
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <p>Page is Loading...</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            const numberOfPlayers = event.playerList.length;
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <img src={event.gameImages}></img>
                        </div>
                        <div className="btn event-host grey ">Game: {event.gameTitle}</div>
                        <div className="btn event-host grey darken-1">Host Name: {event.playerList[0].playerName}</div>
    
    
                        <div className="date grey">
                            <ul>
                                <li>Date: {event.date}</li>
                                <li>Start: {event.startTime}</li>
                            </ul>
                        </div>
    
                        <div className="btn address grey darken-1">
                            <ul>
                                <li>Address: {event.location.streetAddress}</li>
                                <li>City: {event.location.city}</li>
                                <li>State: {event.location.state}</li>
                                <li>Zip: {event.location.zipCode}</li>
                            </ul>
                        </div>
    
                        <div className=" numberOfPlayers grey">
                            <div> {numberOfPlayers} Players out of {event.playerLimit} have joined </div>
                        </div>
    
                        <div className="center joinButton green lighten-4">
                        <button className="btn" onClick={this.sendUserData}></button>
                            {/* <Link onClick={this.sendUserData} to={"/events/" + event.eventID + "/player-list"} className="nav-link">Join Game</Link> */}
                        </div>
                    </div>
                </div>
            );
        }

    }
}

export default EventSelected;