import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <h3 className="center"> Please Provide the Following Information </h3>
        <br/>
        <div className="center">
            <h5> First Name </h5>
            <br/>
            <h5> Last Name </h5>
            <br/>
            <h5> Email </h5>
            <br/>
            <h5> Phone Number </h5>
            <br/>
            <h5>  Zip Code </h5>
            <br/>
            <h5>  Choose a User Name </h5>
            <br/>
            <h5>  Password </h5>
        </div>
        <br/>
        <br/>
        <div className="center">
            <Link to="/events/myevents" className="btn blue">Submit</Link>
        </div>
    </div>



)