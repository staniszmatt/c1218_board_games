import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        playerName: '',
        streetAddress: '',
        city: '',
        state:'',
        zipcode: '',
        password: ''


    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const formattedNewEvent = this.state;

        const resp = await axios.post('/api/signup.php',  formattedNewEvent);
        console.log("the data was posted", resp);

        this.props.history.push(`sign-up`);
    }

    handleKeyPress = (event) => {
        this.setState({
            [event.target.name]: event.target.value

        });
    }

    resetForm = () => {
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            dateOfBirth: '',
            streetAddress:'',
            city: '',
            state: '',
            zipcode: '',
            playerName: '',
            password: ''
        });
    }

    render(){

        const {firstName, lastName, email, phone, dateOfBirth, streetAddress, city, zipcode, state, playerName, password} = this.state;
        return(
            <div>
                <h3 className="center"> Please Provide the Following Information </h3>
                <div className="center">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label> First Name </label>
                            <input onChange={this.handleKeyPress} name="firstName" type="text" id="first-name" value={firstName}/>
                        </div>
                        <div className="form-group">
                            <label> Last Name </label>
                            <input onChange={this.handleKeyPress} name="lastName" type="text" id="last-name" value={lastName}/>
                        </div>
                        <div className="form-group">
                            <label> Email </label>
                            <input onChange={this.handleKeyPress} name="email" type="text" id="email" value={email}/>
                        </div>
                        <div className="form-group">
                            <label> Phone Number </label>
                            <input onChange={this.handleKeyPress} name="phone" type="text" id="phone" value={phone}/>
                        </div>
                        <div className="form-group">
                            <label> Date of Birth </label>
                            <input onChange={this.handleKeyPress} name="dateOfBirth" type="text" id="date-of-birth" value={dateOfBirth}/>
                        </div>
                        <div className="form-group">
                            <label> Street Address</label>
                            <input onChange={this.handleKeyPress} name="streetAddress" type="text" id="streetAddress" value={streetAddress}/>
                        </div>
                        <div className="form-group">
                            <label> City</label>
                            <input onChange={this.handleKeyPress} name="city" type="text" id="city" value={city}/>
                        </div>
                        <div className="form-group">
                            <label> State</label>
                            <input onChange={this.handleKeyPress} name="state" type="text" id="state" value={state}/>
                        </div>
                        <div className="form-group">
                            <label> Zip Code</label>
                            <input onChange={this.handleKeyPress} name="zipcode" type="text" id="zipcode" value={zipcode}/>
                        </div>
                        <div className="form-group">
                            <label> Player Name</label>
                            <input onChange={this.handleKeyPress} name="playerName" type="text" id="player-name" value={playerName}/>
                        </div>
                        <div className="form-group">
                            <label> Password </label>
                            <input onChange={this.handleKeyPress} name="password" type="text" id="password" value={password}/>
                        </div>
                        <div className="center">
                            <button onClick={this.handleSubmit} className="btn  blue">Submit</button>
                            <button onClick={this.resetForm} type="button" className="btn red darken-2 waves-effect waves-light">Clear</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUp;




