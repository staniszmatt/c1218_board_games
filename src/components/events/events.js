import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventRow from './events-row';
// import EventData from '../../../dummy_data/event';
import axios from 'axios';

class Events extends Component {
    state = {
        eventList: []
    }

    componentDidMount() {
        this.getEventList();
    }

    async getEventList(){
        const resp = await axios.get(`/api/events.php`);
       
        this.setState({
            eventList: resp.data.event
        });
        
    }

    render() {
        const { eventList } = this.state;

        let eventRow = [];

        eventRow = eventList.map((event) => {
            return <EventRow key={event.id} event={event} eventId={event.id}/>
        });
        if(eventList.length <= 0){
            return (
                <div className='center'>
                    <div className="main-events-container loading-text">
                        Loading...
                    </div>
                </div>
            )
        }
        return (
            <div className='center'>
                <div className="header-events-container col s12">
                    <h1 className="">Available Events</h1>
                </div>
                <div className="main-events-container">
                    {eventRow}
                </div>
            </div>
        )
    }
}



export default Events;