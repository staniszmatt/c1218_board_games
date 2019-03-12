import types from './types';
import axios from 'axios';

export const signIn = credentials => async dispatch => {
    try {
        const { data } = await axios.post('/api/sign-in.php', credentials);

        if(data['logged-in'] && data.success){
            return dispatch({
                type: types.SIGN_IN
            });
        }

        dispatch({
            type: types.SIGN_IN_ERROR
        });
    } catch(err){
        console.log('Error signing in:', err.message);

        dispatch({
            type: types.SIGN_IN_ERROR
        });
    }
}
