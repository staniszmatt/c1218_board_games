import React from 'react';
import {Field, reduxForm} from 'redux-form';
import './sign-up.css';
import Input from '../general/forms/input';

const CreateSignUpForm = props => {

    // console.log('Sign in Form props:', props);

    const { handleSubmit, onSubmit } = props;
    // console.log('there was a post response', handleSubmit)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <Field name="firstName" component={Input} label="Enter your first name" type="text"/>
            </div>
            <div className="row">
                <Field name="lastName" component={Input} label="Enter your password" type="text"/>
            </div>
            <div className="row">
                <Field name="email" component={Input} label="Enter your email" type="text"/>
            </div>
            <div className="row">
                <Field name="phone" component={Input} label="Enter your phone number" type="text"/>
            </div>
            <div className="row">
                <Field name="dateOfBirth" component={Input} label="Enter your date of birth" type="text"/>
            </div>
            <div className="row">
                <Field name="streetAddress" component={Input} label="Enter your street address" type="text"/>
            </div>
            <div className="row">
                <Field name="city" component={Input} label="Enter your City" type="text"/>
            </div>
            <div className="row">
                <Field name="state" component={Input} label="Enter your state" type="text"/>
            </div>
            <div className="row">
                <Field name="zipcode" component={Input} label="Enter your zipcode" type="text"/>
            </div>
            <div className="row">
                <Field name="playerName" component={Input} label="Enter your player name" type="text"/>
            </div>
            <div className="row">
                <Field name="password" component={Input} label="Enter your password" type="text"/>
            </div>
            <div className="center row">
                <button onClick={handleSubmit} className="blue lighten-1 sign-up">Submit</button>
            </div>
        </form>
    );
}

function validate(values) {
    const { firstName, lastName, email, phone, dateOfBirth, streetAddress, city, zipcode, state, playerName, password } = values;
    const errors = {};

    if (!firstName) {
        errors.firstName = 'Please enter your first name';
    }
    if (!lastName) {
        errors.lastName = 'Please enter your last name';
    }
    if (!email) {
        errors.email = 'Please enter your email';
    }
    if (!phone) {
        errors.phone = 'Please enter your phone number';
    }
    if (!dateOfBirth) {
        errors.dateOfBirth = 'Please enter your date of birth';
    }
    if (!streetAddress) {
        errors.streetAddress = 'Please enter your street address';
    }
    if (!city) {
        errors.city = 'Please enter your city';
    }
    if (!zipcode) {
        errors.zipcode = 'Please enter your zip code';
    }
    if (!state) {
        errors.state = 'Please enter your state';
    }
    if (!playerName) {
        errors.playerName = 'Please enter your email';
    }
    if (!password) {
        errors.password = 'Please enter your pass word';
    }
    return errors;
}

export default reduxForm({
    form: 'create-event-form',
    validate: validate
})(CreateSignUpForm);