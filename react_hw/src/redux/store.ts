import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {coordinatesReducer, loginReducer} from './reducer';
import {photoReducer} from './reducer';

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    photo: photoReducer,
    logins: loginReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
