import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './player-list.css';


class PlayerList extends Component {


    state = {
        eventId: null
    }

    componentDidMount() {
        this.setState({
            eventId: this.props.match.params.id
        });
        this.state.eventId = this.props.match.params.id;
        this.getPlayerListData();
    }

    async getPlayerListData() {
        const eventId = this.state.eventId;
        const resp = await axios.get('/api/events-eventID-player-list.php?eventID=' + eventId + '');

        this.setState({
            data: resp.data.event
        });
    }

    render() {
        const { data } = this.state;

        if (data === undefined) {
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
            if (data.hosting) {
                var backPage = `/events/${data.eventID}/host`;
            } else {
                var backPage = `/events/${data.eventID}`;
            }
            return (
                <div className="main-container">
                    <div className="header-container">
                        <h1>
                            {data.gameTitle}
                        </h1>
                    </div>
                    <div className="row playerlist-date-address-container">
                        <div className="event-date-time-container col s6">
                            <h4>Time</h4>
                            <h6>
                                <ul>
                                    <li> {Date(data.date)}</li>
                                    <li>{data.startTime}</li>
                                    <li> {data.endTime}</li>
                                </ul>
                            </h6>
                        </div>
                        <div className="event-address-container col s6">
                            <h4>Location</h4>
                            <h6>
                                <ul>
                                    <li>{data.location.streetAddress}</li>
                                    <li> {data.location.city}</li>
                                    <li> {data.location.state}</li>
                                    <li> {data.location.zipCode}</li>
                                </ul>
                            </h6>
                        </div>

                    </div>

                    <div className="center player-list-limit">
                        <h5> Player Limit:
                            {data.playerLimit}
                        </h5>
                    </div>
                    <div className="player-list">
                        <h5 className="center"> Players </h5>
                        <table>
                            <tbody>
                                {data.playerList.map((player) => (
                                    <tr key={player.playerName}>
                                        <td className="center" colSpan="2">
                                            {player.playerID}<br />
                                            {player.playerName}
                                        </td>
                                    </tr>))}
                            </tbody>
                        </table>
                        <Link to={backPage} className="btn blue a event-bottom-button">Back To Game</Link>
                    </div>
                </div>
            );
        }
    }
}

export default PlayerList;
