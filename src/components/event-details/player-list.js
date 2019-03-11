import React, {Component} from 'react';
import axios from 'axios';

class PlayerList extends Component {
    state = {
    }

    componentDidMount() {
        this.getPlayerListData();
    }

    async getPlayerListData() {
        const resp = await axios.get('/api/events-eventID.php?eventID=1');

        console.log('resp: ', resp)
        this.setState({
            data: resp.data.event
        });
    }

    render() {
        const { data } = this.state;

        if (data === undefined) {
            return <div>No data</div>;
        } else {
            return (
                <div className="generic-container">
                    <div className="page-header center">
                        <h3 className="center">
                            Checkers
                    </h3>
                    </div>
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
                    <div className="center">
                        <div> Player Limit
                            {data.playerLimit}
                        </div>
                    </div>
                    <div>
                        <h5 className="center"> Players </h5>
                        <table>
                            <thead>
                                <tr className="center">
                                    <th className="center">UserName</th>
                                </tr>
                            </thead>

                            <tbody>
                            {data.playerList.map((player) => (
                                <tr key={player.playerName}>
                                    <td className="center"colSpan="2">
                                        {player.playerID}<br/>
                                        {player.playerName}
                                    </td>
                                </tr>))}
                            </tbody>
                        </table>
                    </div>
                </div>
            );
        }
    }
}

export default PlayerList;
