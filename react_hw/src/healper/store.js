import { configureStore } from '@reduxjs/toolkit';
import coordinatesReducer from './reducer';

const store = configureStore({
    reducer: {
        coordinates: coordinatesReducer,
    },
});

export default store;