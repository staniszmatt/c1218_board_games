import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import MyEventData from '../../../dummy_data/user-joined-list';
import EventRowMyEvents from './events-row-host';
import axios from 'axios';

class MyEvents extends Component {
    state = {
        myEventList: []
    }

    async componentDidMount() {
        const userID = 1;
        const resp = await axios.get(`/api/events-host.php?userID=${userID}`);


        this.setState({
            myEventList: resp.data.userID
        });
    }

    render() {
        const { myEventList } = this.state;
        const eventId = this.state.myEventList;
        if (myEventList.length <= 0) {
            return (
                <div className='center'>
                    <div className="header-container col s12">
                        <h1 className="">My Joined Events</h1>
                    </div>
                    <div className="events-main-container">
                        LOADING....
                </div>
                </div>
            );
        }
        let eventRow = [];
        eventRow = myEventList.map((event) => {
            return <EventRowMyEvents key={event.eventID} event={event} eventId={event.eventID} />
        });
        console.log
        return (

            <div className='center'>
                <div className="header-events-container col s12">
                    <h1 className="">My Joined Events</h1>
                </div>
                <div className="main-events-container">
                    {eventRow}
                </div>
            </div>
        );
    }
}




export default MyEvents;