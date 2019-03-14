import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

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
        const resp = await axios.get('/api/events-eventID.php?eventID='+eventId+'');

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
                <div className="generic-container">
                    <div className="page-header center">
                        <h3 className="center">
                            {data.gameTitle}
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
                        <Link to={"/events/"+data.eventID+""} className="btn">Back To Game</Link>
                    </div>
                </div>
            );
        }
    }
}

export default PlayerList;
