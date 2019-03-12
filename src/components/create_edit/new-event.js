import React, { Component } from 'react';
import CreateEventForm from './new-event-form';
import axios from 'axios';


class NewEvent extends Component {

    handleSubmit = async (event) => {
        const formattedNewEvent = event; //event is being pulled from the form - follow that formatting

        formattedNewEvent.hostID = 1;
        formattedNewEvent.gameImages = '3241234';

        const resp = await axios.post('/api/events-new-event.php', formattedNewEvent);
        const eventID = resp.data.eventID;
                console.log(eventID);



        this.props.history.push(`events/${eventID}/host`);
    }

    // resetForm = () => {
    //     this.setState({
    //         streetAddress: '',
    //         city: '',
    //         state: '',
    //         zipcode: '',
    //         hostID: '1',
    //         date: '',
    //         startTime: '',
    //         endTime: '',
    //         gameTitle: '',
    //         gameImages: 'test',
    //         playerLimit: '',
    //     });
    // }


    render() {

        return (
            <div className="create-event-container">
                <h1 className="center">Create Event</h1>
                <CreateEventForm onSubmit={this.handleSubmit} />
            </div>
        );


        

    }
}

export default NewEvent;





//*** Old Code */
    // handleKeyPress = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value//targeting the event object and taking the value
    //     });

    // }
  // const { streetAddress,
        //     city,
        //     state,
        //     zipcode,
        //     date,
        //     startTime,
        //     endTime,
        //     gameTitle,
        //     playerLimit, } = this.state;
        // const hostID = this.state.hostID;
// return (
        //     <div className="center create-event-container">
        //         <h1 className="center">CREATE EVENT</h1>
        //         <form onSubmit={this.handleSubmit}>
        //             <div className="form-group">
        //                 <label className="">Game Name</label>
        //                 <input onChange={this.handleKeyPress} name="gameTitle" type="text" id="game-name" value={gameTitle} />
        //             </div>

        //             <div className="form-group">
        //                 <Field label="Game Name" component={gameTitle} name="gameTitle" type="text" />
        //             </div>


        //             <div className="form-group">
        //                 <label>Street Address </label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="streetAddress" type="text" id="street-address" value={streetAddress} />
        //             </div>
        //             <div className="form-group">
        //                 <label>City</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="city" type="text" id="city" value={city} />
        //             </div>
        //             <div className="form-group">
        //                 <label>State</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="state" type="text" id="state" value={state} />
        //             </div>
        //             <div className="form-group">
        //                 <label>Zip Code </label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="zipcode" type="number" id="zip-code" value={zipcode} />
        //             </div>
        //             <div className="form-group">
        //                 <label>Date</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="date" type="date" id="date" value={date} />
        //             </div>
        //             <div className="form-group">
        //                 <label>Start Time</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="startTime" type="time" id="start-time" value={startTime} />
        //             </div>
        //             <div className="form-group">
        //                 <label>End Time</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="endTime" type="time" id="start-time" value={endTime} />
        //             </div>
        //             <div className="form-group">
        //                 <label>Number of Players</label>
        //                 <input className="form-control" onChange={this.handleKeyPress} name="playerLimit" type="number" id="player-limit" value={playerLimit} />
        //             </div>
        //         </form>
        //         <div className="col s6 center">
        //             <button onClick={this.handleSubmit} className="btn green darken">Create Event</button>
        //         </div>
        //         <div className="col s6 center">
        //                 <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
        //         </div>
        //     </div>

        // );