import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/sign-out.css';
import {Link} from 'react-router-dom';
import { signOut } from '../../actions';


class SignOut extends Component {
    componentDidMount(){
        this.props.signOut();
    }

    render() {
        
        return (
            <div className="sign-out-page">
                <h3 className="header"> Board Gamers </h3>
                <div className="sign-out">
                    <h1 className="sign-out-header">Signed Out</h1>
                    <p className="paragraph">You have been signed out from your account!</p>
                        <Link to="/" className="btn nav-link green">O K</Link>
                </div>
            </div>
        );
    }
}

export default connect(null, { signOut })(SignOut);

