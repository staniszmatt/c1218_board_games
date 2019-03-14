import React, { Component } from 'react';;
import CreateSignUpForm from './sign-up-form';
import { signUp } from '../../actions';
import { connect } from 'react-redux';

class SignUp extends Component {

    render(){
        return(
            <div className="create-sign-up-container">
                <h1 className="center">Sign Up</h1>
                <CreateSignUpForm onSubmit={this.props.signUp} />
            </div>
        );
    }
}

export default connect(null, { signUp })(SignUp);

