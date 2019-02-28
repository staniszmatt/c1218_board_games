import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div> Complete New Events </div>
            <Link to="/events/id/host" className="nav-link">SUBMIT EVENT</Link>
        </div>

    );
}
