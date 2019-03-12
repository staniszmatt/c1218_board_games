import React, { Component } from 'react';
import SignInForm from './sign_in_form';
import axios from 'axios';
import { format } from 'util';

class SignIn extends Component{
    handleSubmit = async (event) => {
        const formattedNewEvent = event; //event is being pulled from the form - follow that formatting
console.log("events: ", formattedNewEvent)
        const resp = await axios.post('/api/sign-in.php', formattedNewEvent);
        // const eventID = resp.data.eventID;
        console.log(resp);



        this.props.history.push(`/`);
    }

    render(){
        return (
           <div>
               <h1 className="center">Sign In</h1>
               <SignInForm onSubmit={this.handleSubmit}/>
           </div>
        );
    }
}

export default SignIn;


// import React from 'react';
// import {Link} from 'react-router-dom';
//
// export default props => (
//     <div>
//         <h3 className="center"> Please Log In </h3>
//         <div className="center">
//             <form>
//                 <div className="form-group">
//                     <label> User Name </label>
//                     <input name="" type="text"/>
//                 </div>
//                 <div className="form-group">
//                     <label> Password </label>
//                     <input name="" type="text"/>
//                 </div>
//                 <div className="center">
//                     <Link to="/profile" className="btn blue">Submit</Link>
//                 </div>
//             </form>
//         </div>
//     </div>
//
//
//
// )