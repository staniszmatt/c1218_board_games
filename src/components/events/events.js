import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventRow from './events-row';
import axios from 'axios';
import { debug } from 'util';

class Events extends Component {
    state = {
        eventList: [],
        isLoading: true
    }

    async componentDidMount() {
        const resp = await axios.get(`/api/events.php`);
        if (resp.data.success === true && resp.data.event.length <= 0){
            this.setState({
                eventList: [],
                isLoading: false
            });
        }else {
            this.setState({
                eventList: resp.data.event,
                isLoading: false
            });
        }
    }

    render() {
        const { eventList, isLoading } = this.state;

        if(isLoading){
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
            )
        } else if (eventList.length <= 0) {
            return (
                <div className='main-container'>
                    <div className="header-container col s12">
                        <h1 className="">Available Events</h1>
                    </div>
                    <div className="content-container no-available-events">
                        NO AVAILABLE EVENTS
                </div>
                    <div>
                        <Link to="/profile" className="btn nav-link available-events-btn">Profile</Link>
                    </div>
                </div>
            );
        } 

        let eventRow = [];
        eventRow = eventList.map((event) => {
            return <EventRow key={event.id} event={event} eventId={event.id}/>
        });

        return (
            <div className='main-container'>
                <div className="header-container">
                    <h1>Available Events</h1>
                </div>
                <div className="content-container">
                    {eventRow}
                </div>
            </div>
        );
    }
}

export default Events;