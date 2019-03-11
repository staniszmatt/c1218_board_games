import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class NewEvent extends Component {
    state = {
        streetAddress: '',
        city: '',
        state: '',
        zipcode: '',
        hostID: '1',
        date: '',
        startTime: '',
        endTime: '',
        gameTitle: '',
        gameImages: '',
        playerLimit: '',
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const formattedNewEvent = this.state;

        const resp = await axios.post('/api/events-new-event.php', formattedNewEvent);
        console.log("response", resp);
        const eventID = resp.data.eventID;
        this.setState({
            eventId: resp.data.eventID
        })

        this.props.history.push(`events/${eventID}/host`);
    }

    resetForm = () => {
        this.setState({
            streetAddress: '',
            city: '',
            state: '',
            zipcode: '',
            hostID: '1',
            date: '',
            startTime: '',
            endTime: '',
            gameTitle: '',
            gameImages: 'test',
            playerLimit: '',
        });
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value//targeting the event object and taking the value
        });

    }

    render() {
        const { streetAddress,
            city,
            state,
            zipcode,
            date,
            startTime,
            endTime,
            gameTitle,
            playerLimit, } = this.state;
        const hostID = this.state.hostID;

        return (
            <div className="center create-event-container">
                <h1 className="center">CREATE EVENT</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className="">Game Name</label>
                        <input onChange={this.handleKeyPress} name="gameTitle" type="text" id="game-name" value={gameTitle} />
                    </div>
                    <div className="form-group">
                        <label>Street Address </label>
                        <input className="form-control" onChange={this.handleKeyPress} name="streetAddress" type="text" id="street-address" value={streetAddress} />
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="city" type="text" id="city" value={city} />
                    </div>
                    <div className="form-group">
                        <label>State</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="state" type="text" id="state" value={state} />
                    </div>
                    <div className="form-group">
                        <label>Zip Code </label>
                        <input className="form-control" onChange={this.handleKeyPress} name="zipcode" type="number" id="zip-code" value={zipcode} />
                    </div>
                    <div className="form-group">
                        <label>Date</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="date" type="date" id="date" value={date} />
                    </div>
                    <div className="form-group">
                        <label>Start Time</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="startTime" type="time" id="start-time" value={startTime} />
                    </div>
                    <div className="form-group">
                        <label>End Time</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="endTime" type="time" id="start-time" value={endTime} />
                    </div>
                    <div className="form-group">
                        <label>Number of Players</label>
                        <input className="form-control" onChange={this.handleKeyPress} name="playerLimit" type="number" id="player-limit" value={playerLimit} />
                    </div>
                </form>
                <div className="col s6 center">
                    <button onClick={this.handleSubmit} className="btn green darken">Create Event</button>
                </div>
                <div className="col s6 center">
                        <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                </div>
            </div>

        );

    }
}

export default NewEvent;