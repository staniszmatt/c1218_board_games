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
        const resp = await axios.get('/api/events-eventID.php?eventID=' + eventId + '');

        this.setState({
            data: resp.data.event
        });
    }

    render() {
        const { data } = this.state;

        if (data === undefined) {
            return <h3>Page is Loading...</h3>;
        } else {
            return (
                <div className="generic-container playerlist-container">
                    <div className="page-header player-list-title center">
                        <h3 className="center">
                            {data.gameTitle}
                        </h3>
                    </div>
                    <div className="center player-list-date">Date and Time
                        <div>
                            {Date(data.date)} from {data.startTime} to {data.endTime}
                        </div>
                    </div>
                    <div className="center player-list-address">Location
                        <div>
                            {data.location.streetAddress},<br />
                            {data.location.city},<br />
                            {data.location.state},<br />
                            {data.location.zipCode}
                        </div>
                    </div>
                    <div className="center player-list-limit">
                        <div> Player Limit
                            {data.playerLimit}
                        </div>
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
                        <div className="center">
                            <Link to={"/events/" + data.eventID + ""} className="btn center">Back To Game</Link>
                        </div>

                    </div>
                </div>
            );
        }
    }
}

export default PlayerList;
