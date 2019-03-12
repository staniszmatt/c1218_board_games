import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN:
            return { auth: true, error: null };
        case types.SIGN_IN_ERROR:
            return { auth: false, error: 'Email and/or password incorrect' };
        default:
            return state;
    }
}
