import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
       <div>
           <h1 className="center "> Event Information</h1>

          <div>
              <div>Host: Topher Uchiha</div>

              <div>Game Title: Magic The Gathering</div>

              <div>
                  <ul>
                      <li>Date: 4-20-1984</li>
                      <li>Time: 1:00P.M.</li>
                  </ul>
              </div>

              <div>
                  <ul>
                      <li>Address: Some Address</li>
                      <li>City: Beverly Hills</li>
                      <li>State: CA</li>
                      <li>Zip: 90210</li>
                  </ul>
              </div>

              <div>
                  <div> 4 - 6 </div>
              </div>

          </div>
           <div>
               <Link to="/events/id" className="nav-link">Game 1</Link>
               <h1>game2</h1>
               <Link to="/events/id" className="nav-link">Game 2</Link>
           </div>
       </div>

    );
}