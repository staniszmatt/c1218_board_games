import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './events.css';
import EventRowHost from './events-row-host';
// import EventsHostData from '../../../dummy_data/user-host-list';
import axios from 'axios';


class EventsHost extends Component {
    state = {
        hostEventsList: []
    }


    async componentDidMount(){
        const userID = 1;
        const resp = await axios.get(`/api/events-host.php?userID=${userID}`);
        
        
        this.setState({
            hostEventsList: resp.data.userID
        });
    }

    render(){
        const { hostEventsList } = this.state;

        

        if (hostEventsList.length <= 0){
            return(
            <div className='center'>
                <div className="header-container col s12">
                    <h1 className="">My Hosted Events</h1>
                </div>
                <div className="events-main-container">
                    LOADING....
                </div>
            </div>
            );
        }
        let eventRow = [];
        eventRow = hostEventsList.map((event) => {
            return <EventRowHost key={event.eventID} event={event} eventId={event.eventID}/>
        });
        console.log
        return (
            
            <div className='center'>
                <div className="header-events-container col s12">
                    <h1 className="">Hosted Events</h1>
                </div>
                <div className="main-events-container">
                    {eventRow}
                </div>
            </div>
        );
    }
}




export default EventsHost;