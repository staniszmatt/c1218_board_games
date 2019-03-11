import React from 'react';

export default props => {
    console.log('Input Props:', props);

    const { input, label, type='text', meta: {error, touched}} = props;

    return(
        <div className="input-field">
            <input {...input} type={type ? type : 'text'} autoComplete="off"/>
            <label> {label} </label>
            <p className="red-text darken-2"> {touched && error} </p>
        </div>
    );
}
