import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PlayerListData from '../../../dummy_data/player-list';


class PlayerList extends Component {
    state = {
        data: PlayerListData[0]
    }

    componentDidMount() {
        this.getPlayerListData();
    }

    getPlayerListData() {
        this.setState({
            data: PlayerListData[0]
        });
    }

    render() {
        const { data } = this.state;

        return (
            <div>
                <div> http://localhost:3000/events/id/player-list</div>
                <h3 className="center">
                    Checkers
                </h3>
                <div className="center">Date and Time
                    <div>
                        {Date(data.date)} from {data.startTime} to {data.endTime}
                    </div>
                </div>
                <div className="center">Location
                    <div>
                        {data.location.streetAddress},<br/>
                        {data.location.city},<br/>
                        {data.location.state},<br/>
                        {data.location.zipCode}
                    </div>
                </div>

                <div>

                    <h5 className="center"> Players </h5>

                    <table>
                        <thead>
                        <tr>
                            <th className="center">UserName</th>
                            <th className="center">Rank</th>

                        </tr>
                        </thead>

                        <tbody>
                        {data.players.map((player) => (
                            <tr key={player.userPlayerName}>
                                <td colSpan="2">
                                    {player.userID}<br/>
                                    {player.userPlayerName}
                                </td>
                            </tr>))}
                        <tr>
                            <td className="center">
                                <div>OPEN</div>
                            </td>
                            <td className="center">
                                <Link to="/events/myevents" className="btn">JOIN</Link>
                            </td>
                        </tr>
                        <tr>
                            <td className="center">
                                <div>OPEN</div>
                            </td>
                            <td className="center">
                                <Link to="/events/myevents" className="btn">JOIN</Link>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default PlayerList;