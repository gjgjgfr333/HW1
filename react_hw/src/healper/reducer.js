const initialState = {
    lat: '46.8371',
    lon: '29.611',
    cityNow: 'Тирасполь',
};

const coordinatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_COORDINATES':
            return {
                ...state,
                lat: action.payload.lat,
                lon: action.payload.lon,
                cityNow: action.payload.cityNow,
            };
        default:
            return state;
    }
};

export default coordinatesReducer;