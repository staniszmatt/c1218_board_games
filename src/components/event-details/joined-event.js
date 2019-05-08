import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../event-id/event-id.css';
import '../../assets/css/back-button.css';
import axios from 'axios';

class JoinedEventDetails extends Component {
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

  sendUserData = async () => {
    const resp = await axios.post('/api/events-eventID-myEvents-leaveGame.php', this.state.eventId);
    this.props.history.push("/events/myevents");
  }

  render() {
    const { eventId } = this.state;
    if (eventId === null) {
      return (
        <div className="loading-screen-container">
          <div className='center loading-screen-text'>Page Is Loading...</div>
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

    const numberOfPlayers = eventId.playerCount;
    if (numberOfPlayers >= parseInt(eventId.playerLimit)) {
      return (
        <div className="main-container">
          <div className="header-container">
            <h1>Game: {eventId.gameTitle}</h1>
          </div>
          <div className="content-container">
            <div className="event-game-container">
              <h4>
                Host Name: {eventId.playerName}
              </h4>
            </div>
            <div className="date event-date-address-container row">
              <div className="event-date-time-container col s12">
                <ul>
                  <li>Date: {eventId.date}</li>
                  <li>Start: {eventId.startTime}</li>
                </ul>
              </div>
              <div className="event-address-container col s12">
                <ul>
                  <li>Address: {eventId.location.streetAddress}</li>
                  <li>City: {eventId.location.city}</li>
                  <li>State: {eventId.location.state}</li>
                  <li>Zip: {eventId.location.zipCode}</li>
                </ul>
              </div>
            </div>
            <div className="numberOfPlayers event-host">
              <div className="full-game-container red">
                <h4>Game Is Full!</h4>
              </div>
            </div>
            <div className="center back">
              <button className="back-btn blue" onClick={this.sendUserData}>Leave Game</button>
            </div>
          </div>
        </div>
      );
    } 
    return (
      <div className="main-container">
        <div className="header-container">
          <h1>Game: {eventId.gameTitle}</h1>
        </div>
        <div className="content-container">
          <div className="event-game-container">
            <h4>
              Host Name: {eventId.playerName}
            </h4>
          </div>
          <div className="date event-date-address-container row">
            <div className="event-date-time-container col s12">
              <ul>
                <li>Date: {eventId.date}</li>
                <li>Start: {eventId.startTime}</li>
              </ul>
            </div>
            <div className="event-address-container col s12">
              <ul>
                <li>Address: {eventId.location.streetAddress}</li>
                <li>City: {eventId.location.city}</li>
                <li>State: {eventId.location.state}</li>
                <li>Zip: {eventId.location.zipCode}</li>
              </ul>
            </div>
          </div>
          <div className="event-players-joined-container">
            <Link to={'/events/' + eventId.eventID + '/player-list'}>
              <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
            </Link>
          </div>
          <div className="center back">
            <Link className="back-btn blue" onClick={this.sendUserData} to={"profile"}>Leave Game</Link>
            <a onClick={this.props.history.goBack} className="back-btn blue">Back</a>
          </div>
        </div>
      </div>
    );
  }
}

export default JoinedEventDetails;