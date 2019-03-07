import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div className="center">
            <h1 className="center">CREATE EVENT</h1>
            <form>
                <div className="form-group">
                    <label className="">Game Name</label>
                    <input name="gameName" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Address </label>
                    <input name="address" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Date and Time</label>
                    <input name="dateAndTime" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Number of Players</label>
                    <input name="numberOfPlayers" type="text" className="form-control" />
                </div>
            </form>
            <Link to="/events/:id/host" className="btn text-center nav-link">SUBMIT EVENT</Link>
        </div>

    );
}
