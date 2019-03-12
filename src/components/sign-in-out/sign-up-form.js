import React from 'react';
import {Field, reduxForm} from 'redux-form';
import Input from '../general/forms/input';

const SignUpForm = props => {
    console.log('Sign in Form props:', props);

    const { handleSubmit, onSubmit } = props;
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="firstName" component={Input} label="Enter your first name"/>
            </div>
            <div className="row">
                <Field name="lastName" component={Input} label="Enter your password" type="password"/>
            </div>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="password"/>
            </div>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="password"/>
            </div>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="password"/>
            </div>
            <div className="row">
                <div className="col s12 center">
                    <button className="btn blue lighten-1">Sign Up</button>
                </div>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'sign_up_form',
})(SignUpForm);