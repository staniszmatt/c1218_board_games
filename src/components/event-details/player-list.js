import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './player-list.css';
import '../../assets/css/back-button.css';
import timeTo12Hours from '../../helper/timeTo12Hours';

class PlayerList extends Component {
  state = {
    eventId: null
  }

  componentDidMount() {
    this.setState({
      eventId: this.props.match.params.id
    });
    this.getPlayerListData();
  }

  async getPlayerListData() {
    const eventId = this.props.match.params.id;
    const resp = await axios.get('/api/events-eventID-player-list.php?eventID=' + eventId);

    this.setState({
      data: resp.data.event
    });
  }

  render() {
    const { data } = this.state;
    if (data === undefined) {
      return (
        <div className="loading-screen-container">
          <div className='center loading-screen-text'></div>
          <div className="preloader-wrapper big active test">
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
      if (data) {
        const startTime12H = timeTo12Hours(data.startTime);
        const endTime12H = timeTo12Hours(data.endTime);
        return (
          <div className="main-container">
            <div className="header-container">
              <h1>
                {data.gameTitle}
              </h1>
            </div>
            <div className="content-container" >
              <div className="row playerlist-date-address-container">
                <div className="event-date-time-container">
                  <h6>Time</h6>
                  <ul>
                    <li> {Date(data.date)}</li>
                    <li>{startTime12H}</li>
                    <li> {endTime12H}</li>
                  </ul>
                </div>
                <div className="event-address-container">
                  <h6>Location</h6>
                  <ul>
                    <li>{data.location.streetAddress}</li>
                    <li> {data.location.city}</li>
                    <li> {data.location.state}</li>
                    <li> {data.location.zipCode}</li>
                  </ul>
                </div>
              </div>
              <div className="center player-list-limit">
                <h6> Player Limit:{data.playerLimit}
                </h6>
              </div>
              <div className="player-list">
                <h6 className="center"> Players </h6>
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
              </div>
              <a onClick={this.props.history.goBack} className="back-btn">Back</a>
            </div>
          </div>
        );
      }
    }
  }
}

export default PlayerList;