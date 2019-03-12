import React, { Component } from 'react';;
import axios from 'axios';
import CreateSignUpForm from './sign-up-form';


class SignUp extends Component {

    handleSubmit = async (event) => {
        const formattedNewEvent = event;

        const resp = await axios.post('/api/sign-up.php',  formattedNewEvent);
        console.log("the data was posted", resp);

        this.props.history.push(`sign-up`);
    }

    // handleKeyPress = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     });
    // }

    render(){

        return(
            <div className="create-sign-up-container">
                <h1 className="center">Sign Up</h1>
                <CreateSignUpForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default SignUp;

