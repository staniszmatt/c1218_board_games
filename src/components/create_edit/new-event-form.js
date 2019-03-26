import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/forms/input';
import './create-form.css';

const CreateEventForm = props => {


    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-group create-form">
                <Field label="Game Name" component={Input} name="gameTitle" type="text" />
                <Field label="Street Address" component={Input} name="streetAddress" type="text" />
                <Field label="City" component={Input} name="city" type="text" />
                <Field label="State" component={Input} name="state" type="text" />
                <Field label="Zip Code" component={Input} name="zipcode" type="number" />
                <Field label="Date" component={Input} name="date" type="date" />
                <Field label="Start Time" component={Input} name="startTime" type="time" />
                <Field label="End Time" component={Input} name="endTime" type="time" />
                <Field label="Player Limit " component={Input} name="playerLimit" type="text" />
            </div>

            <div className="col s6 center">
                <button className="btn green darken">Create Event</button>
            </div>

        </form>
    );
}

function validate(values) {
    console.log(values);
    const { streetAddress,
        city,
        state,
        zipcode,
        date,
        startTime,
        endTime,
        gameTitle,
        playerLimit } = values;
    const errors = {};

    if (!streetAddress) {
        errors.streetAddress = 'Please enter your street address';
    }

    if (!city) {
        errors.city = 'Please enter your city';
    }

    if (!state) {
        errors.state = 'Please enter your state';
    }

    if (!date) {
        errors.date = 'Please enter the date';
    }
    if (!zipcode) {
        errors.zipcode = 'Please enter your zip code';
    }

    if (!startTime) {
        errors.startTime = 'Please enter the start time';
    }

    if (!endTime) {
        errors.endTime = 'Please enter the end time';
    }
    if (!gameTitle) {
        errors.gameTitle = 'Please enter your Game Title';
    }

    if (!playerLimit) {
        errors.playerLimit = 'Please enter the number of players';
    }
    if (playerLimit && playerLimit > 99) {
        errors.playerLimit = 'Player limit to large!';
    }
    if (streetAddress && streetAddress.length > 30) {
        errors.streetAddress = 'Street address is to long!';
    }
    if (gameTitle && gameTitle.length > 60) {
        errors.gameTitle = 'Game title is to long.';
    }
    if (zipcode && (zipcode.length <= 4 || zipcode.length >= 6)) {
        errors.zipcode = 'Please enter a proper zip code.';
    }
    if (state && state.length > 20) {
        errors.state = 'City or state is to long!';
    }
    if (startTime && endTime && startTime > endTime) {
        errors.startTime = 'Please enter the start time that is before the end time';
    }
    return errors;
}

export default reduxForm({
    form: 'create-event-form',
    validate: validate
})(CreateEventForm);