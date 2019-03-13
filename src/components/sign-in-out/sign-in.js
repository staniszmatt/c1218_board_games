import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { signIn } from '../../actions';
import { format } from 'util';

class SignIn extends Component{
    render(){
        return (
           <div>
               <h1 className="center">Sign In</h1>
                <SignInForm onSubmit={this.props.signIn}/>
           </div>
        );
    }
}

export default connect(null, { signIn })(SignIn);


