import { combineReducers } from '@reduxjs/toolkit';
import authReducers from './authReducers';
import analyticsReducers from './analyticesReducers';


const rootReducer = combineReducers({
    auth: authReducers,
    analytices: analyticsReducers,
});


export default rootReducer;