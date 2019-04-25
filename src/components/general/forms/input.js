import React from 'react';
import '../../../assets/css/forms.css'

export default props => {

    const { input, label, type='text', meta: {error, touched}} = props;
    return(
        <div className="form-container" >
            <input className="form-field" {...input} type={type ? type : 'text'} autoComplete="off"  />
            <label className="form-label" id="input-label"> {label} </label>
            <p className="red-text darken-2" > {touched && error} </p>
        </div>
    );
}
