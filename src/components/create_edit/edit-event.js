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
        this.state.eventId = this.props.match.params.id;
        this.setState({
            eventId: this.props.match.params.id
        });

        this.getEditEventData();
    }

    async getEditEventData() {
        const eventId = this.state.eventId
        console.log('eventid',eventId)
        const resp = await axios.get('/api/events-eventID-edit.php?eventID='+eventId+'');

        console.log('resp: ', resp.data.event);

        this.setState({
            ...resp.data.event
        });
        console.log(this.state);
    }

    // handleSubmit = async (event) => {
    //     event.preventDefault();

    //     const formattedNewEvent = this.state;

    //     const resp = await axios.post('/api/events-new-event.php', formattedNewEvent);
    //     console.log("response", resp);
    //     const eventID = resp.data.eventID;
    //     this.setState({
    //         eventId: resp.data.event
    //     })

    //     this.props.history.push(`events/${eventID}/host`);
    // }

    // handleKeyPress = (event) => {
    //     if (['streetAddress'].includes(event.target.name)){
    //         this.setState({
    //             location: {
    //                 [event.target.name]: event.target.value
    //             }
    //         });
    //     } else {
    //         this.setState({
    //             [event.target.name]: event.target.value
    //         });
    //     }
    // }

    render(){
        const  {gameTitle, eventId, date, location, startTime, endTime, playerLimit} = this.state;
        const  {streetAddress, city, state, zipcode} = this.state.location;
        const eventLocation = location.streetAddress + ' ' +location.city+ ' ' +location.state+ ' ' +location.zipcode;
        const eventTime = startTime+ ' to ' +endTime;
        
        return (

            <div className="center edit-event-container">
                <div className="page-header center">
                    <h1 className="center">EDIT EVENT</h1>
                </div>
                

                <form onSubmit={this.handleKeyPress}>
                    <div className="form-group">
                        <label htmlFor="gameTitle">Game Title</label>
                        <input onChange={this.handleKeyPress} name="gameTitle" type="text" id="gameTitle"  value={gameTitle} className="form-control"  />
                    </div>
                    <div className="form-group">
                        <label htmlFor="streetAddress">Street Address</label>
                        <input onChange={this.handleKeyPress} name="streetAddress" type="text" id="streetAddress"  value={location.streetAddress} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input onChange={this.handleKeyPress} name="city" type="text" id="city"  value={location.city} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="state">State</label>
                        <input onChange={this.handleKeyPress} name="state" type="text" id="state"  value={location.state} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="zipcode">Zip Code</label>
                        <input onChange={this.handleKeyPress} name="zipcode" type="text" id="zipcode"  value={location.zipcode} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input onChange={this.handleKeyPress} name="date" type="date" id="text"  value={date} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="startTime">Start Time</label>
                        <input onChange={this.handleKeyPress} name="startTime" type="text" id="startTime"  value={startTime} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endTime">End Time</label>
                        <input onChange={this.handleKeyPress} name="endTime" type="text" id="endTime"  value={endTime} className="form-control" />
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