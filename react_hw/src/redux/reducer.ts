const initialState = {
    lat: '46.8371',
    lon: '29.611',
    cityNow: 'Тирасполь',
};

export const coordinatesReducer = (state = initialState, action: any) => {
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

const initialPhoto = {
    photoUrl: null,
};

export const photoReducer = (state = initialPhoto, action: any) => {
    switch (action.type) {
        case 'SET_PHOTO_URL':
            return { ...state, photoUrl: action.payload };
        default:
            return state;
    }
};

const initialLogin = {
    login: 'Имя',
};

export const loginReducer = (state = initialLogin, action: any) => {
    switch (action.type) {
        case 'SET_LOGIN':
            return { ...state, login: action.payload };
        default:
            return state;
    }
};



