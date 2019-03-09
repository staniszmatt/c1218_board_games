import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './profile.css';
import axios from 'axios';

class Profile extends Component {
    state = {
        userProfile: null
    }
    componentDidMount(){
        this.getUserProfile();
    }

    async getUserProfile(){
        const userId = 1;
        const resp = await axios.get(`/api/profile.php?id=${userId}`);
        console.log(resp);
        this.setState({
            userProfile: resp.data.data[0] || []
            
        });
    }
render(){
    console.log(this.state.userProfile)
    // return(
    //     <div>teset</div>
    // )

    // // render() {


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
            
            <div className="center">
                <div className="center user-image">
                    <div className="center profile-image"> User Profile Picture here</div>
                </div>
                <div className="center user-info">
                    <div className="center">Full Name: {fullName}</div>
                    <div className="center">User Name: {playerName}</div>
                </div>
                <div className="profile-button-container center">
                    <div>
                        <Link to="/new-event" className="btn nav-link green create-event-btn">Create Event</Link>
                    </div>

                    <div>
                        <Link to="/events" className="btn nav-link green">View Available Events</Link>
                    </div>

                    <div>
                        <Link to="/events/host" className="btn nav-link green">My Hosted Events</Link>
                    </div>

                    <div>
                        <Link to="/events/myevents" className="btn nav-link green">My Joined Events</Link>
                    </div>
                </div>
            </div>
        );
    // }
    }
}
export default Profile;









