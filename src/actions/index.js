import types from './types';
import axios from 'axios';

export const checkAuth = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/is-logged-in.php');

        dispatch({
            type: types.SIGN_IN
        });
    } catch(err){
        dispatch({
            type: types.SIGN_OUT
        });
    }
}

export const signIn = credentials => async dispatch => {
    const error = 'Error signing in - invalid email and or password';
    console.log("creds",credentials)
    try {
        console.log()
        const { data } = await axios.post('/api/sign-in.php', credentials);
        console.log(data)

        if(data['logged-in'] && data.success){

            localStorage.setItem('logged-in', true);

            return dispatch({
                type: types.SIGN_IN
            });
        }

        dispatch({
            type: types.SIGN_IN_ERROR,
            error
        });
    } catch(err){
        console.log('Error signing in:', err.message);

        dispatch({
            type: types.SIGN_IN_ERROR,
            error
        });
    }
}

export const signOut = () => async dispatch => {
    try {
        const { data } = await axios.get('/api/sign-out.php');

        localStorage.removeItem('logged-in');

        dispatch({
            type: types.SIGN_OUT
        });

    } catch(err){
        dispatch({
            type: types.SIGN_OUT_ERROR
        });
    }
}

export const signUp = credentials => async dispatch => {
    const error = 'Error creating new account';
    try {
        const { data } = await axios.post('/api/sign-up.php', credentials);

        if (data.success) {

            localStorage.setItem('logged-in', true);

            return dispatch({
                type: types.SIGN_UP,
                error
            });
        }

        dispatch({
            type: types.SIGN_UP_ERROR,
            error
        });
    } catch (err) {
        console.log('Error signing in:', err.message);

        dispatch({
            type: types.SIGN_UP_ERROR
        });
    }
}