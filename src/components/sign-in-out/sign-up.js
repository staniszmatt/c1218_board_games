import React, { Component } from 'react';;
import CreateSignUpForm from './sign-up-form';
import { signUp } from '../../actions';
import { connect } from 'react-redux';

class SignUp extends Component {

    render(){
        return(
            <div className="main-container">
                    <div className="header-container">
                        <h1> SIGN UP </h1>
                    </div>
                <div className="content-container">
                <CreateSignUpForm onSubmit={this.props.signUp} />
                </div>
            </div>
        );
    }
}

export default connect(null, { signUp })(SignUp);

