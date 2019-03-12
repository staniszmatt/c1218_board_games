import React, { Component } from 'react';
import '../../assets/css/sign-out.css';
import axios from 'axios';

class SignOut extends Component {
    constructor(props){
        super(props);
    }

    signOut = async () => {

        const resp = await axios.get('/api/sign-out.php');
        console.log('resp ',resp)
        // this.props.location.state.activeUser = resp.data['logged-in']

    }

    render() {
        this.signOut();
        return (
            <div>
                <h3 className="header"> Board Gamers </h3>

                <div className="sign-out"> You have been signed out </div>

            </div>
        )
    }



}

export default SignOut;

// export default props => (
//     <div>
//         <h3 className="header"> Board Gamers </h3>

//         <div className="sign-out"> You have been signed out </div>

//     </div>
// )