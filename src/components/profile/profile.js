import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import UserData from '../../../dummy_data/profile';
import './profile.css';

class Profile extends Component {
    state = {
        userProfile: UserData
    }
    componentDidMount(){
        this.getUserProfile();
    }

    getUserProfile(){
        const userId = 0;
        this.setState({
            userProfile: UserData[userId] || []
        });
    }
    render() {
        const {userPlayerName} = this.state.userProfile;
        const fullName = `${this.state.userProfile.userFirstName} ${this.state.userProfile.userLastName}`
        return (
            <div className="center">
                <div className="center user-info">
                    <div className="center profile-image"> User Profile Picture here</div>
                    <div className="center">Full Name: {fullName}</div>
                    <div className="center">User Name: {userPlayerName}</div>
                </div>
                <div className="profile-button-container center">
                    <div>
                        <Link to="/new-event" className="btn nav-link red black-text">Create Event</Link>
                    </div>

                    <div>
                        <Link to="/events" className="btn nav-link blue black-text">View Available Events</Link>
                    </div>

                    <div>
                        <Link to="/events/host" className="btn nav-link red black-text">My Hosted Events</Link>
                    </div>

                    <div>
                        <Link to="/events/myevents" className="btn nav-link blue black-text">My Joined Events</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;









