import React, { Component } from 'react';
import timeTo12Hours from '../../helper/timeTo12Hours';
import { Link } from 'react-router-dom';
import './event-id.css';
import axios from 'axios';

class EventSelected extends Component {
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
    const resp = await axios.post(`/api/events-id-join.php`, {
      eventID: this.props.match.params.id
    });
    this.props.history.push("/events/" + this.props.match.params.id + "/player-list")
  }

  render() {
    const { eventId } = this.state;
    let startTime = null;
    let endTime = null;
    if (eventId) {
      startTime = timeTo12Hours(eventId.startTime);
      endTime = timeTo12Hours(eventId.endTime);
    }
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
    } else {
      const numberOfPlayers = eventId.playerCount;
      if (numberOfPlayers >= parseInt(eventId.playerLimit)) {
        return (
          <div className="main-container">
            <div className="header-container">
              <h1>Event Details</h1>
            </div>
            <div className="content-container">
              <div className="event-game-container">
                <h4>
                  Game: {eventId.gameTitle}
                </h4>
              </div>
              <div className="event-host-container">
                <h5>
                  Host Name: {eventId.playerName}
                </h5>
              </div>
              <div className="date event-date-address-container row">
                <div className="event-date-time-container col s12">
                  <ul>
                    <li>Date: {eventId.date}</li>
                    <li>Start: {startTime}</li>
                    <li>End: {endTime}</li>
                  </ul>
                </div>
                <div className="event-address-container col s12">
                  <ul>
                    <li>Address: {eventId.location.streetAddress}</li>
                    <li>City: {eventId.location.city}</li>
                    <li>State: {eventId.location.state}</li>
                    <li>Zip: {eventId.location.zipcode}</li>
                  </ul>
                </div>
              </div>
              <div className="numberOfPlayers event-host">
                <div className="full-game-container red">
                  <h4>Game Is Full!</h4>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return (
        <div className="main-container">
          <div className="header-container">
            <h1>Event Details</h1>
          </div>
          <div className="content-container">
            <div className="event-game-container">
              <h4>
                Game: {eventId.gameTitle}
              </h4>
            </div>
            <div className="event-host-container">
              <h5>
                Host Name: {eventId.playerName}
              </h5>
            </div>
            <div className="date event-date-address-container row">
              <div className="event-date-time-container col s12">
                <ul>
                  <li>Date: {eventId.date}</li>
                  <li>Start: {startTime}</li>
                  <li>End: {endTime}</li>
                </ul>
              </div>
              <div className="event-address-container col s12">
                <ul>
                  <li>Address: {eventId.location.streetAddress}</li>
                  <li>City: {eventId.location.city}</li>
                  <li>State: {eventId.location.state}</li>
                  <li>Zip: {eventId.location.zipcode}</li>
                </ul>
              </div>
            </div>
            <div className="event-players-joined-container">
              <Link to={'/events/' + eventId.eventID + '/player-list'}>
                <div> {numberOfPlayers} Players out of {eventId.playerLimit} have joined </div>
              </Link>
            </div>
            <Link className="blue event-bottom-button" onClick={this.sendUserData} to={'/events/' + eventId.eventID + '/player-list'}>Join Game</Link>
          </div>
        </div>
      );
    }
  }
}

export default EventSelected;