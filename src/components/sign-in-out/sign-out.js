import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../assets/css/sign-out.css';
import { signOut } from '../../actions';

class SignOut extends Component {
    componentDidMount(){
        this.props.signOut();
    }

    render() {
        
        return (
            <div>
                <h3 className="header"> Board Gamers </h3>

                <div className="sign-out"> You have been signed out </div>

            </div>
        );
    }
}

export default connect(null, { signOut })(SignOut);
