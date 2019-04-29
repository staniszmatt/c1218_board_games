import React, { Component } from 'react';
import './events.css';
import EventRowMyEvents from './events-row-myevents';
import axios from 'axios';
import {Link} from 'react-router-dom';

class MyEvents extends Component {
    state = {
        myEventList: []
    }

    async componentDidMount() {
        const resp = await axios.get(`/api/events-myevents.php`);
        if (resp.data.success === true && resp.data.userID.length <= 0) {
            this.setState({
                myEventList: [null]
            });

        } else {
            this.setState({
                myEventList: resp.data.userID
            });
        }

    }

    render() {

        const { myEventList } = this.state;

        if (myEventList.length <= 0) {

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
        } else if (myEventList[0] === null) {
            return (
                <div className='main-container'>
                    <div className="header-container col s12">
                        <h1 className="">My Joined Events</h1>
                    </div>
                    <div className="content-container no-available-events">
                        NO AVAILABLE EVENTS
                </div>
                    <div>
                        <Link to="/events" className="btn nav-link available-events-btn">View Available Events</Link>
                    </div>
                </div>
            );
        }
        let eventRow = [];
        eventRow = myEventList.map((event) => {

            return <EventRowMyEvents key={event.eventID} event={event} eventId={event.eventID} />
        });

        return (

            <div className='main-container'>
                <div className="header-container col s12">
                    <h1 className="">My Joined Events</h1>
                </div>
                <div className="content-container">
                    {eventRow}
                </div>
            </div>
        );
    }
}
export default MyEvents;