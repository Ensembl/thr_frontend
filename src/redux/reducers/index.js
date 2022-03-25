import { combineReducers } from 'redux';

import { authenticationReducer } from './authenticationReducer';
import { registrationReducer } from './registrationReducer';
import { alertReducer } from './alertReducer';

const rootReducer = combineReducers({
    authenticationReducer,
    registrationReducer,
    alertReducer
});

export default rootReducer;