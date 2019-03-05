import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventRow from './events-row';
import EventData from '../../../dummy_data/event';
// import axios from 'axios';

class Events extends Component {
    state = {
        eventList: EventData
    }

    // componentDidMount() {
    //     this.getEventList();
    // }

    // async getEventList(){
    //     const resp = await axios.get('/api/events.php');
    //     this.setState({
    //         eventList: resp.data
    //     });
    //     console.log('resp: ', resp);
    // }

    render() {
        const { eventList } = this.state;
        let eventRow = [];

        eventRow = eventList.map((event) => { 
            return <EventRow key={event.id} event={event} />
        });

        return (
            <div className='center'>
                <div className="header-container col s12">
                    <h1 className="">Available Events</h1>
                </div>
                <div className="main-container">
                    {eventRow}
                </div>
            </div>
        )
    }
}



export default Events;