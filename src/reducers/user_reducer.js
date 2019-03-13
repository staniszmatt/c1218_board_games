import types from '../actions/types';

const DEFAULT_STATE = {
    auth: false,
    error: null
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true, error: null };
        case types.SIGN_IN_ERROR:
        case types.SIGN_UP_ERROR:
            return { auth: false, error: action.error || 'Auth error' };
        case types.SIGN_OUT:
            return { auth: false, error: null };
        case types.SIGN_OUT_ERROR:
            return { auth: false, error: 'Error logging out' };
        default:
            return state;
    }
}
