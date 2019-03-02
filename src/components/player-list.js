import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div> events/:event_id/edit </div>
            <h3 className="center">
                Checkers
            </h3>
            <div className="center">Date and Time
                <div>
                    Saturday, March 16 from 6:00P.M. to 10:00P.M.
                </div>
            </div>
            <div className="center">Location
                <div>
                    65 Cascade
                    Irvine, CA 92604
                </div>
            </div>

            <div>

                <h5 className="center"> Players </h5>

                <table>
                    <thead>
                    <tr>
                        <th className="center">UserName</th>
                        <th className="center">Rank</th>

                    </tr>
                    </thead>

                    <tbody>
                    <tr>
                        <td className="center">User 1</td>
                        <td className="center">Board Game Master</td>
                    </tr>
                    <tr>
                        <td className="center">User 2</td>
                        <td className="center">Novice</td>
                    </tr>
                    <tr>
                        <td className="center">User 3</td>
                        <td className="center">Prodigy</td>
                    </tr>
                    <tr>
                        <td className="center">User 4</td>
                        <td className="center">Board Game Noob</td>
                    </tr>
                    <tr>
                        <td className="center"><div>OPEN</div></td>
                        <td className="center"><div className="btn">JOIN</div></td>
                    </tr>
                    <tr>
                        <td className="center"><div>OPEN</div></td>
                        <td className="center"><div className="btn">JOIN</div></td>
                    </tr>

                    </tbody>
                </table>
            </div>
         </div>





            /*<Link to="/profile" className="nav-link">YOUR PROFILE</Link>*/


    );
}
