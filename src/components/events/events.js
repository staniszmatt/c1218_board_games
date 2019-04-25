import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventRow from './events-row';
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
                <div className="loading-screen-container">
                    <div className='center loading-screen-text'>Page Is Loading...</div>
                    <div className="loading-screen-container preloader-wrapper big active test">
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
            )
        }
        return (
            <div className='main-container'>
                <div className="header-container">
                    <h1>Available Events</h1>
                </div>
                <div className="content-container">
                    {eventRow}
                </div>
            </div>
        )
    }
}



export default Events;