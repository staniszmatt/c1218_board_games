import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../general/forms/input';

const SignInForm = props => {
    console.log('Sign in Form props:', props);

    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="password"/>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <button className="btn blue lighten-1">Sign In</button>
                </div>
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

    console.log('Errors:', errors);

    return errors;
}

export default reduxForm({
    form: 'sign_in_form',
    validate: validate
})(SignInForm);