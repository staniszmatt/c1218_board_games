import React, { Component } from 'react';
import './events.css';
import EventRowHost from './events-row-host';
import axios from 'axios';


class EventsHost extends Component {
    state = {
        hostEventsList: []
    }

    async componentDidMount(){
 
        const resp = await axios.get(`/api/events-host.php`);
        
        if (resp.data.success === true && resp.data.userID.length === 0){
            this.setState({
                hostEventsList: [null]
            });
        } else {
            this.setState({
                hostEventsList: resp.data.userID
            });
        }
    }

    render(){
        
        const { hostEventsList } = this.state;

        

        if (hostEventsList.length <= 0){
            return(
            <div className='center'>
                <div className="header-container col s12">
                        <h1 className="hosted-events-header">My Hosted Events</h1>
                </div>
                <div className="events-main-container loading-events">
                    LOADING....
                </div>
            </div>
            );
        } else if (hostEventsList[0] === null) {
            return (
                <div className='center'>
                    <div className="header-container col s12">
                        <h1 className="hosted-events-header">My Hosted Events</h1>
                    </div>
                    <div className="events-main-container no-available-events">
                        NO AVAILABLE EVENTS
                </div>
                </div>
            );
        }

        let eventRow = [];
        eventRow = hostEventsList.map((event) => {
            return <EventRowHost key={event.eventID} event={event} eventId={event.eventID}/>
        });

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