import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import EventData from '../../dummy_data/event-eventID-edit';

class EditEvent extends Component{
    state = {
        eventId: EventData
    }
    componentDidMount(){


    }

    componentWillUpdate(){

    }

    render(){
        const { eventId } = this.state;
        const numberOfPlayers = eventId.playerList.length;
        const address = `${eventId.location.streetAddress} ${eventId.location.city} ${eventId.location.state} ${eventId.location.zipCode}`;
        
        
        return (
            <div className="center">
                <h1 className="center">EDIT EVENT</h1>
                <form>
                    <div className="form-group">
                        <label className="" >Board Game</label>
                        <input name="gameName" type="text" className="form-control" value={eventId.gameTitle} />
                    </div>
                    <div className="form-group">
                        <label>Address </label>
                        <input name="address" type="text" className="form-control" value={address}/>
                    </div>
                    <div className="form-group">
                        <label>Date and Time</label>
                        <input name="dateAndTime" type="text" className="form-control" value={eventId.startTime}/>
                    </div>
                    <div className="form-group">
                        <label>Number of Players</label>
                        <input name="numberOfPlayers" type="text" className="form-control" value={eventId.playerLimit}/>
                    </div>
                </form>
                <Link to="/events/id/host" className="btn text-center nav-link">SUBMIT CHANGES</Link>
            </div>
    
        );
    }
}

export default EditEvent;