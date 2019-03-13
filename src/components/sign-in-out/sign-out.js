import React, { Component } from 'react';
import '../../assets/css/sign-out.css';
import axios from 'axios';
import {Link} from "react-router-dom";

class SignOut extends Component {
    constructor(props){
        super(props);
    }

    signOut = async () => {

        const resp = await axios.get('/api/sign-out.php');
        console.log('resp ',resp)
        // this.props.location.state.activeUser = resp.data['logged-in']

    }

    render() {
        this.signOut();
        return (
            <div className="sign-out-page">
                <h3 className="header"> Board Gamers </h3>
                <div className="sign-out">
                    <h1 className="sign-out-header">Signed Out</h1>
                    <p className="paragraph">You have been signed out from your account!</p>
                        <Link to="/" className="btn nav-link green">O K</Link>
                </div>
            </div>
        )
    }

}

export default SignOut;

