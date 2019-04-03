import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: false
        }
    }


    render() {
        const activeUser = this.props.auth;
        if (activeUser === false) {
        return ( 
            <footer className="nav-wrapper">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="btn nav-btn-style nav-link  center home-btn">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-up" className="btn nav-link  center sign-up-btn">Sign Up</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-in" className="btn nav-link  center sign-in-btn">Sign In</Link>
                    </li>
                </ul>
            </footer>
        );
        } else
            return (
            <footer className="nav-wrapper">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/profile" className="btn nav-btn-style nav-link center profile-btn">Profile</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/events" className="btn nav-link  center event-btn">Events</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-out" className="btn nav-link  center sign-out-btn">Sign Out</Link>
                    </li>

                    {/* <li className="nav-item">
                        <Link to="/about" className="btn nav-link  center about-btn">About</Link>
                    </li> */}
                </ul>
            </footer>

        );



    }
}

function mapStateToProps({user}){
    return { auth: user.auth };
}

export default connect(mapStateToProps)(Nav);
