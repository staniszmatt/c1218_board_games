import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
       <div className="center ">

           <div>
               <Link to="/events/id" className="nav-link">Game 1</Link>
               <h1>game2</h1>
               <Link to="/events/id" className="nav-link">Game 2</Link>
           </div>
       </div>

    );
}