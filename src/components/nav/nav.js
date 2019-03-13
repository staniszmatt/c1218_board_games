import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';
import axios from 'axios';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeUser: false
        }
    }



    // signOut = async () => {
     
    //     const resp = await axios.get('/api/sign-out.php');
    //     console.log(resp);
    //     console.log('logged in',resp.data['logged-in'])
    //     this.render.userID = false;
    // }




    render() {
        const activeUser = false;
        // const userID = this.props.match.params.loggedIn;
        if (activeUser === false) {
        return ( 
            <footer className="nav-wrapper">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/" className="btn nav-btn-style nav-link black center home-btn">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-up" className="btn nav-link  center font-color: black sign-up-btn">Sign Up</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/sign-in" className="btn nav-link  center font-color: black sign-in-btn">Sign In</Link>
                    </li>
                </ul>
            </footer>
        );
        } else
            return (
            <footer className="nav-wrapper">
                <ul className="nav">
                    <li className="nav-item">
                        <Link to="/profile" className="btn nav-btn-style nav-link black center profile-btn">Profile</Link>
                    </li>

                    <li className="nav-item">
                        <Link to="/events" className="btn nav-link  center font-color: black event-btn">Events</Link>
                    </li>

                    <li className="nav-item">
                            <Link to="/sign-out" className="btn nav-link  center font-color: black sign-in-btn">Sign Out</Link>
                    </li>
                </ul>
            </footer>

        );



    }
}

export default Nav;

// export default props => {
//     const userID = null;
//     if (userID === null) {
//         <footer className="nav-wrapper">
//             <ul className="nav">
//                 <li className="nav-item">
//                     <Link to="/" className="btn nav-btn-style nav-link black center profile-btn">Home</Link>
//                 </li>

//                 {/*<li className="nav-item">*/}
//                 {/*<Link to="/sign-out" className="btn nav-link  center font-color: red sign-out-btn">Sign Out</Link>*/}
//                 {/*</li>*/}

//                 <li className="nav-item">
//                     <Link to="/sign-up" className="btn nav-link  center font-color: black event-btn">Sign Up</Link>
//                 </li>

//                 <li className="nav-item">
//                     <Link to="/sign-in" className="btn nav-link  center font-color: black sign-in-btn">Sign In</Link>
//                 </li>
//             </ul>
//         </footer>
//     }

//     <footer className="nav-wrapper">
//         <ul className="nav">
//             <li className="nav-item">
//                 <Link to="/profile" className="btn nav-btn-style nav-link black center profile-btn">Profile</Link>
//             </li>

//             {/*<li className="nav-item">*/}
//             {/*<Link to="/sign-out" className="btn nav-link  center font-color: red sign-out-btn">Sign Out</Link>*/}
//             {/*</li>*/}

//             <li className="nav-item">
//                 <Link to="/events" className="btn nav-link  center font-color: black event-btn">Events</Link>
//             </li>

//             <li className="nav-item">
//                 <Link to="/sign-in" className="btn nav-link  center font-color: black sign-in-btn">Sign In</Link>
//             </li>
//         </ul>
//     </footer>



// }

