import React, {Component} from 'react';
import { Link } from 'react-router-dom';
//EventHostPage
import EventHostData from '../../../dummy_data/event-eventID-edit';
import axios from 'axios';


class EventHostPage extends Component {
    state = {
        hostEventId: null
    }

    async componentDidMount() {
        const eventId = this.props.match.params.id
        const resp = await axios.get('/api/events-eventID-edit.php?eventID='+eventId+'');
        
        this.setState({
            hostEventId: resp.data.event
        });

    }

    render() {
        const { hostEventId } = this.state;

        if (hostEventId === null) {
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <p>Page is Loading...</p>
                        </div>
                    </div>
                </div>
            );
        } else {
            const numberOfPlayers = hostEventId.playerList.length;
            return (
                <div className="center">
                    <div className="main-container">
                        <div className="btn game-picture center">
                            <img src={hostEventId.gameImages}></img>
                        </div>
                        <div className="btn event-host grey ">Game: {hostEventId.gameTitle}</div>
                        <div className="btn event-host grey darken-1">Host Name: {hostEventId.playerList[0].playerName}</div>


                        <div className="date grey">
                            <ul>
                                <li>Date: {hostEventId.date}</li>
                                <li>Start: {hostEventId.startTime}</li>
                            </ul>
                        </div>

                        <div className="btn address grey darken-1">
                            <ul>
                                <li>Address: {hostEventId.location.streetAddress}</li>
                                <li>City: {hostEventId.location.city}</li>
                                <li>State: {hostEventId.location.state}</li>
                                <li>Zip: {hostEventId.location.zipcode}</li>
                            </ul>
                        </div>

                        <div className=" numberOfPlayers grey">
                            <div> {numberOfPlayers} Players out of {hostEventId.playerLimit} have joined </div>
                        </div>

                        <div className="center joinButton green lighten-4">
                            <Link to={'/events/' + hostEventId.eventID + '/edit'} className="nav-link">Edit Game</Link>
                        </div>
                    </div>

                </div>
           
           
           
            // <div className="center">

            //     <div className="main-container">
            //             <div className="btn game-picture center">
            //                 <img src={hostEventId.gameImage}></img>
            //             </div>
            //             <div className="btn event-host grey ">Game: {hostEventId.gameTitle}</div>
            //             <div className="btn event-host grey darken-1">Host Name: {hostEventId.playerList[0].userPlayerName}</div>


            //             <div className="date grey">
            //                 <ul>
            //                     <li>Date: {hostEventId.date}</li>
            //                     <li>Start: {hostEventId.startTime}</li>
            //                 </ul>
            //             </div>

            //             <div className="btn address grey darken-1">
            //                 <ul>
            //                     <li>Address: {hostEventId.location.streetAddress}</li>
            //                     <li>City: {hostEventId.location.city}</li>
            //                     <li>State: {hostEventId.location.state}</li>
            //                     <li>Zip: {hostEventId.location.zipCode}</li>
            //                 </ul>
            //             </div>

            //             <div className=" numberOfPlayers grey">
            //                 <div> {numberOfPlayers} Players out of {hostEventId.playerLimit} have joined </div>
            //             </div>

            //             <div className="center joinButton green lighten-4">
            //                 <Link to="/events/id/edit" className="nav-link">Edit Game</Link>
            //             </div>
            //     </div>

            // </div>
        );
    }
}
}
export default EventHostPage;