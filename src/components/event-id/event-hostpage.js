import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './event-id.css';
import '../../assets/css/back-button.css';
import timeTo12Hours from '../../helper/timeTo12Hours';

class EventHostPage extends Component {
  state = {
    hostEventId: null
  }

  async componentDidMount() {
    const eventId = this.props.match.params.id
    const resp = await axios.get('/api/events-eventID-host.php?eventID=' + eventId + '');
    if (resp.data.success === true && resp.data.event.length <= 0) {
      this.setState({
        hostEventId: null
      });
    } else {
      this.setState({
        hostEventId: resp.data.event
      });
    }
  }

  render() {
    const { hostEventId } = this.state;
    let startTime = null;
    let endTime = null;
    if (hostEventId) {
      startTime = timeTo12Hours(hostEventId.startTime);
      endTime = timeTo12Hours(hostEventId.endTime);
    }
    if (hostEventId === null) {
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
    }
    const numberOfPlayers = hostEventId.playerCount;
    if (numberOfPlayers >= parseInt(hostEventId.playerLimit)) {
      return (
        <div className="main-container">
          <div className="header-container">
            <h1>Host Event Details</h1>
          </div>
          <div className="content-container">
            <div className="event-game-container">
              <h3>
                Game: {hostEventId.gameTitle}
              </h3>
            </div>
            <div className="event-host-container">
              Host Name: {hostEventId.playerName}
            </div>
            <div className="date event-date-address-container row">
              <div className="event-date-time-container col s12">
                <ul>
                  <li>Date: {hostEventId.date}</li>
                  <li>Start: {startTime}</li>
                  <li>End: {endTime}</li>
                </ul>
              </div>
              <div className="event-address-container col s12">
                <ul>
                  <li>Address: {hostEventId.location.streetAddress}</li>
                  <li>City: {hostEventId.location.city}</li>
                  <li>State: {hostEventId.location.state}</li>
                  <li>Zip: {hostEventId.location.zipcode}</li>
                </ul>
              </div>
            </div>
            <div className="numberOfPlayers event-host">
              <div className="full-game-container">
                <h4>Game Is Full!</h4>
              </div>
              <a onClick={this.props.history.goBack} className="back-btn">Back</a>
            </div>
            <div className="center">
              <Link to={'/events/' + hostEventId.eventID + '/edit'} params={{ hosting: true }} className="back-btn">Edit Game</Link>
              <a onClick={this.props.history.goBack} className="back-btn">Back</a>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="main-container">
        <div className="header-container">
          <h1>Host Event Details</h1>
        </div>
        <div className="content-container">
          <div className="event-game-container">
            <h4>
              Game: {hostEventId.gameTitle}
            </h4>
          </div>
          <div className="event-host-container">
            <h5>Host Name: {hostEventId.playerName}</h5>
          </div>
          <div className="date event-date-address-container row">
            <div className="event-date-time-container col s12">
              <ul>
                <li>Date: {hostEventId.date}</li>
                <li>Start: {startTime}</li>
                <li>End: {endTime}</li>
              </ul>
            </div>
            <div className="event-address-container col s12">
              <ul>
                <li>Address: {hostEventId.location.streetAddress}</li>
                <li>City: {hostEventId.location.city}</li>
                <li>State: {hostEventId.location.state}</li>
                <li>Zip: {hostEventId.location.zipcode}</li>
              </ul>
            </div>
          </div>
          <div className="event-players-joined-container">
            <Link to={'/events/' + hostEventId.eventID + '/player-list'}>
              {numberOfPlayers} Players out of {hostEventId.playerLimit} have joined
            </Link>
          </div>
          <Link to={'/events/' + hostEventId.eventID + '/edit'} params={{ hosting: true }} className="back-btn">Edit Game</Link>
          <a onClick={this.props.history.goBack} className="back-btn">Back</a>
        </div>
      </div>
    );
  }
}

export default EventHostPage;