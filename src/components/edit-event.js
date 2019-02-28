import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div >Event - Edit </div>
            <Link to="/events/id/host" className="nav-link">Submit</Link>
        </div>

    );
}
