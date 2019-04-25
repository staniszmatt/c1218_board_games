import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import axios from 'axios';

class Profile extends Component {
    state = {
        userProfile: null
    }
    componentDidMount() {
        if (this.props.auth) {
            this.getUserProfile();
        }
    }

    async getUserProfile() {
        const resp = await axios.get(`/api/profile.php`);

        this.setState({
            userProfile: resp.data.data[0] || []
        });
    }
    render() {

        if (this.state.userProfile === null) {
            return (
                <div className="center">
                    <div className="center user-info">
                        <div className="center">Loading...</div>
                    </div>
                </div>
            );
        }

        const { playerName } = this.state.userProfile;
        return (

            <div className="main-container">
                <div className="header-container">
                    <h1> Profile </h1>
                </div>
                <div className="content-container ">
                    <div className="profile-name-container">
                        <h3>Welcome, <br /> {playerName}!</h3>
                    </div>
                    <div className="profile-button-container center">
                            <div>
                                <Link to="/new-event" className="btn nav-link create-event-btn">Create Event</Link>
                            </div>

                            <div>
                                <Link to="/events" className="btn nav-link available-events-btn">View Available Events</Link>
                            </div>

                            <div>
                                <Link to="/events/host" className="btn nav-link my-hosted-events-btn">My Hosted Events</Link>
                            </div>

                            <div>
                                <Link to="/events/myevents" className="btn nav-link my-joined-events-btn">My Joined Events</Link>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;









