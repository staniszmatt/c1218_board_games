import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import axios from 'axios';

class Profile extends Component {
    state = {
        userProfile: null
    }
    componentDidMount(){
        if(this.props.auth){
            this.getUserProfile();
        }
    }

    async getUserProfile(){
        console.log("profile auth",this.props)
        const userId = 80;
        const resp = await axios.get(`/api/profile.php`);
        console.log(resp)
        this.setState({
            userProfile: resp.data.data[0] || []
        });
    }
render(){

    if (this.state.userProfile === null){
            return (
                <div className="center">
                    <div className="center user-image">
                        <div className="center profile-image"> User Profile Picture here</div>
                    </div>
                    <div className="center user-info">
                        <div className="center">Loading...</div>
                    </div>
                </div>
            );
        }

    const { playerName } = this.state.userProfile;
    const fullName = `${this.state.userProfile.firstName} ${this.state.userProfile.lastName}`;
        return (
            
            <div className="center profile">
                <div>
                    <h2> Profile </h2>
                </div>
                <div className="center user-image">
                    <div className="center profile-image"> User Profile Picture here</div>
                </div>
                <div className="center user-info">
                    <div className="center">Full Name: {fullName}</div>
                    <div className="center">User Name: {playerName}</div>
                </div>
                <div className="profile-button-container center">
                    <div className="buttons">
                        <div>
                            <Link to="/new-event" className="btn nav-link green create-event-btn">Create Event</Link>
                        </div>

                        <div>
                            <Link to="/events" className="btn nav-link green available-events-btn">View Available Events</Link>
                        </div>

                        <div>
                            <Link to="/events/host" className="btn nav-link green my-hosted-events-btn">My Hosted Events</Link>
                        </div>

                        <div>
                            <Link to="/events/myevents" className="btn nav-link green my-joined-events-btn">My Joined Events</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Profile;









