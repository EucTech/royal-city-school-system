import { combineReducers } from '@reduxjs/toolkit';
import authReducers from './authReducers';
import analyticsReducers from './analyticesReducers';
import { addReducers } from './addDataReducer';


const rootReducer = combineReducers({
    auth: authReducers,
    analytices: analyticsReducers,
    addData: addReducers,
});


export default rootReducer;