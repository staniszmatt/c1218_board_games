import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import EventData from '../../../dummy_data/event-eventID-edit';
import axios from 'axios';

class EditEvent extends Component{
    state = {
        eventId: '',
        gameTitle: '',
        startTime: '',
        endTime: '',
        location: {
            streetAddress: '',
            city: '',
            state: '',
            zipcode: '',
         playerLimit: ''
        }
    }
    componentDidMount(){
        this.setState({
            eventId: this.props.match.params.id
        });
        this.getEditEventData();
    }

    async getEditEventData() {

        const resp = await axios.get('/api/events-eventID-edit.php?eventID=1');

        console.log('resp: ', resp);

        this.setState({
            ...resp.event,
            eventId: this.state.eventId
        });
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const  {gameTitle, eventId, startTime, endTime, playerLimit} = this.state;
        const  {streetAddress, city, state, zipcode} = this.state.location;
        
        return (

            <div className="center">
                <h1 className="center">EDIT EVENT</h1>

                <form onSubmit={this.handleKeyPress}>
                    <div className="form-group">
                        <div>{gameTitle}</div>
                        <input onChange={this.handleKeyPress} name="gameTitle" type="text" id="gameTitle"  value={gameTitle} className="form-control"  />
                        <label htmlFor="gameTitle">Game Title</label>
                    </div>
                    <div className="form-group">
                        <input name="address" type="text" className="form-control" value={eventId.location}/>
                        <label htmlFor="gameTitle">Location</label>
                    </div>
                    <div className="form-group">
                        <input name="dateAndTime" type="text" className="form-control" value={eventId.startTime}/>
                        <label htmlFor="gameTitle">Time</label>
                    </div>
                    <div className="form-group">
                        <input name="numberOfPlayers" type="text" className="form-control" value={eventId.playerLimit}/>
                        <label htmlFor="">Player Limit</label>
                    </div>
                </form>

                <Link to="/events/id/host" className="btn text-center nav-link">SUBMIT CHANGES</Link>
            </div>
    
        );
    }
}

export default EditEvent;