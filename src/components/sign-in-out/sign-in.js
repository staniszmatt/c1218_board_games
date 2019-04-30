import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignInForm from './sign_in_form';
import { signIn } from '../../actions';
import { format } from 'util';

class SignIn extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header-container">
          <h1> SIGN IN </h1>
        </div>
        <div className="content-container ">
          <SignInForm onSubmit={this.props.signIn} />
          <p>{this.props.error}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.user.error
  }
}

export default connect(mapStateToProps, { signIn })(SignIn);