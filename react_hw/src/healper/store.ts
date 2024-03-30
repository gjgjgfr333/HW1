import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {coordinatesReducer} from './reducer';
import {photoReducer} from './reducer';

const rootReducer = combineReducers({
    coordinates: coordinatesReducer,
    photo: photoReducer
});

const store = configureStore({
    reducer: rootReducer
});

export default store;
