import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BoardGamePic from '../../assets/images/boardgame_default.jpg';

class EventHostPage extends Component {
    state = {
        hostEventId: null
    }

    async componentDidMount() {
        const eventId = this.props.match.params.id
        const resp = await axios.get('/api/events-eventID-host.php?eventID=' + eventId + '');

        this.setState({
            hostEventId: resp.data.event
        });


    }

    render() {
        const { hostEventId } = this.state;

        if (hostEventId === null) {
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
        const numberOfPlayers = hostEventId.playerCount;
        if (numberOfPlayers >= parseInt(hostEventId.playerLimit)) {
            return (
                <div className="center">
                    <div className="event-details center">
                        <h1>Host Event Details</h1>
                    </div>
                    <div className="main-container-event center">
                        <div className="event-host">
                            <h3>
                                Game: {hostEventId.gameTitle}
                            </h3>
                        </div>
                        <div className="event-host center">Host Name: {hostEventId.playerName}</div>


                        <div className="date event-host center">
                            <ul>
                                <li>Date: {hostEventId.date}</li>
                                <li>Start: {hostEventId.startTime}</li>
                            </ul>
                        </div>

                        <div className="address event-host">
                            <ul>
                                <li>Address: {hostEventId.location.streetAddress}</li>
                                <li>City: {hostEventId.location.city}</li>
                                <li>State: {hostEventId.location.state}</li>
                                <li>Zip: {hostEventId.location.zipcode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers grey">
                            <div> Event is Full!</div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <Link to={'/events/' + hostEventId.eventID + '/edit'} className="nav-link">Edit Game</Link>
                        </div>
                    </div>

                </div>
            );
        }
        return (
            <div className="center">
                <div className="event-details center">
                    <h1>Host Event Details</h1>
                </div>
                <div className="main-container-event">
                    <div className="event-host">
                        <h3>
                            Game: {hostEventId.gameTitle}
                        </h3>
                    </div>
                    <div className="event-host event-border center">Host Name: {hostEventId.playerName}</div>


                    <div className="date event-host center">
                        <ul>
                            <li>Date: {hostEventId.date}</li>
                            <li>Start: {hostEventId.startTime}</li>
                        </ul>
                    </div>

                    <div className="event-border address">
                        <ul>
                            <li>Address: {hostEventId.location.streetAddress}</li>
                            <li>City: {hostEventId.location.city}</li>
                            <li>State: {hostEventId.location.state}</li>
                            <li>Zip: {hostEventId.location.zipcode}</li>
                        </ul>
                    </div>
                    <div>
                        <Link to={'/events/' + hostEventId.eventID + '/player-list'}>
                            {numberOfPlayers} Players out of {hostEventId.playerLimit} have joined
                    </Link>
                    </div>
                    <div className="center joinButton event-border">
                        <Link to={'/events/' + hostEventId.eventID + '/edit'} className="nav-link">Edit Game</Link>
                    </div>
                </div>
            </div>
        );

    }
}
export default EventHostPage;