import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { signIn } from '../../actions';
import { format } from 'util';

class SignIn extends Component{
    render(){
        console.log('Error:', this.props.error);
        return (
           <div className="sign-in-main-container">
               <h1 className="center sign-in-header">Sign In</h1>
                <SignInForm onSubmit={this.props.signIn}/>
                <p>{this.props.error}</p>
           </div>
        );
    }
}

function mapStateToProps(state){
    return {
        error: state.user.error
    }
}

export default connect(mapStateToProps, { signIn })(SignIn);


