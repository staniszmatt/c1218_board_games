import React from 'react';

export default props => {

    const { input, label, type='text', meta: {error, touched}} = props;
    return(
        <div>
            <input {...input} type={type ? type : 'text'} autoComplete="off"  />
            <label id="input-label"> {label} </label>
            <p className="red-text darken-2" > {touched && error} </p>
        </div>
    );
}
