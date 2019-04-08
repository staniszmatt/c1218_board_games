import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../general/forms/input';
import {Link} from 'react-router-dom';
import './sign-in.css';

const SignInForm = props => {

    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email" type='text'/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="password"/>
            </div>
           <div className="sign-btn-container">
               <button className="btn green lighten-1 sign-in">Sign In</button>
           </div>
        </form>
    );
}

function validate(values){

    const { email, password } = values;
    const errors = {};

    if(!email){
        errors.email= 'Please enter your email';
    }
    if(!password){
        errors.password= 'Please enter your password';
    }
   

    return errors;
}

export default reduxForm({
    form: 'sign_in_form',
    validate: validate
})(SignInForm);