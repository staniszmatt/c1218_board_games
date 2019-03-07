import React, {Component } from 'react';
import {Link} from 'react-router-dom';
import './edit-event.css';
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

        console.log('resp: ', resp.data.event);

        this.setState({
            ...resp.data.event
        });
        console.log(this.state);
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render(){
        const  {gameTitle, eventId, location, startTime, endTime, playerLimit} = this.state;
        const  {streetAddress, city, state, zipcode} = this.state.location;
        const eventLocation = location.streetAddress + ' ' +location.city+ ' ' +location.state+ ' ' +location.zipcode;
        const eventTime = startTime+ ' to ' +endTime;
        
        return (

            <div className="center">
                <h1 className="center">EDIT EVENT</h1>

                <form onSubmit={this.handleKeyPress}>
                    <div className="form-group">
                        <label htmlFor="gameTitle">Game Title</label>
                        <input onChange={this.handleKeyPress} name="gameTitle" type="text" id="gameTitle"  value={gameTitle} className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gameTitle">Location</label>
                        <input onChange={this.handleKeyPress} name="address" type="text" id="address"  value={eventLocation} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="gameTitle">Time</label>
                        <input onChange={this.handleKeyPress} name="dateAndTime" type="text" id="dateAndTime"  value={eventTime} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Player Limit</label>
                        <input onChange={this.handleKeyPress} name="numberOfPlayers" type="text"  id="numberOfPlayers" value={playerLimit} className="form-control" />
                    </div>
                </form>

                <Link to="/events/id/host" className="btn text-center nav-link">SUBMIT CHANGES</Link>
            </div>
    
        );
    }
}

export default EditEvent;