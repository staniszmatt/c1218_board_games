import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <h3 className="center"> Please Provide the Following Information </h3>
        <div className="center">
            <form>
                <div className="form-group">
                    <label> First Name </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Last Name </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Email </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Phone Number </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Data of Birth </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Zip Code</label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Choose User Name </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input name="" type="text"/>
                </div>
                <div className="center">
                    <Link to="/events/myevents" className="btn blue">Submit</Link>
                </div>
            </form>
        </div>
    </div>



)