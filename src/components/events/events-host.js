import React, { Component } from 'react';
import './events.css';
import EventRowHost from './events-row-host';
import '../../assets/css/back-button.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EventsHost extends Component {
  state = {
    hostEventsList: []
  }

  onBackButtonEvent = () => {
    console.log("Browser", history);
    history.back();
  }

  async componentDidMount() {
    const resp = await axios.get(`/api/events-host.php`);
    if (resp.data.success === true && resp.data.userID.length === 0) {
      this.setState({
        hostEventsList: [null]
      });
    } else {
      this.setState({
        hostEventsList: resp.data.userID
      });
    }
  }

  render() {
    const { hostEventsList } = this.state;
    if (hostEventsList.length <= 0) {
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
    } else if (hostEventsList[0] === null) {
      return (
        <div className='main-container'>
          <div className="header-container col s12">
            <h1 className="hosted-events-header">My Hosted Events</h1>
          </div>
          <div className="content-container no-available-events">
            NO AVAILABLE EVENTS
                </div>
          <div>
            <Link to="/new-event" className="btn nav-link green create-event-btn">Create Event</Link>
          </div>
        </div>
      );
    }
    let eventRow = [];
    eventRow = hostEventsList.map((event) => {
      return <EventRowHost key={event.eventID} event={event} eventId={event.eventID} />
    });
    return (
      <div className='main-container'>
        <div className="header-container col s12">
          <h1 className="">Hosted Events</h1>
        </div>
        <div className="content-container">
          {eventRow}
          <button onClick={this.onBackButtonEvent} className="back-btn blue">Back</button>
        </div>
      </div>
    );
  }
}

export default EventsHost;