import React from 'react';
import {Link} from 'react-router-dom';

export default props => (
    <div>
        <h3 className="center"> Please Log In </h3>
        <div className="center">
            <form>
                <div className="form-group">
                    <label> User Name </label>
                    <input name="" type="text"/>
                </div>
                <div className="form-group">
                    <label> Password </label>
                    <input name="" type="text"/>
                </div>

                <div className="center">
                    <Link to="/profile" className="btn blue">Submit</Link>
                </div>
            </form>
        </div>
    </div>



)