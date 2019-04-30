import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/forms/input';
import './sign-up.css';

const CreateSignUpForm = props => {
  const { handleSubmit, onSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-row">
        <Field className="input-field" name="firstName" component={Input} label="Enter your first name" type="text" />
      </div>
      <div className="form-row">
        <Field name="lastName" component={Input} label="Enter your last name" type="text" />
      </div>
      <div className="form-row">
        <Field name="email" component={Input} label="Enter your email" type="text" />
      </div>
      <div className="form-row">
        <Field name="phone" component={Input} label="Enter your phone number" type="number" placeholder="Phone Number" />
      </div>
      <div className="form-row">
        <Field name="dateOfBirth" component={Input} label="Enter your date of birth" type="date" />
      </div>
      <div className="form-row">
        <Field name="streetAddress" component={Input} label="Enter your street address" type="text" />
      </div>
      <div className="form-row">
        <Field name="city" component={Input} label="Enter your City" type="text" />
      </div>
      <div className="form-row">
        <Field name="state" component={Input} label="Enter your state" type="text" />
      </div>
      <div className="form-row">
        <Field name="zipcode" component={Input} label="Enter your zipcode" type="text" />
      </div>
      <div className="form-row">
        <Field name="playerName" component={Input} label="Enter your player name" type="text" />
      </div>
      <div className="form-row">
        <Field name="password" component={Input} label="Enter your password" type="password" />
      </div>
      <div className="form-row">
        <Field name="confirmPassword" component={Input} label="Confirm your password" type="password" />
      </div>
      <div className="col s6 center">
        <button className="btn blue darken sign-up-button">Sign Up</button>
      </div>
    </form>
  );
}

function validate(values) {
  const { firstName, lastName, email, phone, dateOfBirth, streetAddress, city, zipcode, state, playerName, password, confirmPassword } = values;
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
    errors.password = 'Please enter your password';
  }
  if (playerName && playerName.length > 20) {
    errors.playerName = 'Player name must be less than 20 characters';
  }
  if (firstName && firstName.length > 20) {
    errors.firstName = 'First name must be less than 20 characters';
  }
  if (lastName && lastName.length > 20) {
    errors.lastName = 'Last name must be less than 20 characters';
  }
  if (email && email.length > 60) {
    errors.email = 'Email must be less than 60 characters';
  }
  if (password && password.length > 20) {
    errors.password = 'Password must be less than 30 characters';
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Please make sure both password fields match!';
  }
  if (zipcode && (zipcode.length <= 4 || zipcode.length >= 6)) {
    errors.zipcode = 'Please enter a proper zip code.';
  }
  if (state && state.length > 20) {
    errors.state = 'City or state is to long!';
  }
  if (city && city.length > 20) {
    errors.city = 'City or state is to long!';
  }
  return errors;
}

export default reduxForm({
  form: 'create-event-form',
  validate: validate
})(CreateSignUpForm);