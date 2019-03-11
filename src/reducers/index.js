import { combineReducers } from 'redux';
import userReducer from './user_reducer';
import { reducer as formReducer} from 'redux-form';

// const state = {
//     user: {
//         auth: false,
//         info: {}
//     }
// }

const rootReducer = combineReducers({
    form: formReducer,
    user: userReducer
});

export default rootReducer;