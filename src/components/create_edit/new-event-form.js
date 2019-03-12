import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Input from '../general/forms/input';

const CreateEventForm = props => {


    const { handleSubmit, onSubmit } = props;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
            <div className="form-group">
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

    // if (!email) {
    //     errors.email = 'Please enter your email';
    // }
    // if (!password) {
    //     errors.password = 'Please enter your password';
    // }
    // return errors;
}

export default reduxForm({
    form: 'create-event-form',
    validate: validate
})(CreateEventForm);