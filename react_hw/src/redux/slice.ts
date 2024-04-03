export const setCoordinates = (lat:string, lon:string,cityNow:string) => ({
    type: 'SET_COORDINATES',
    payload: { lat, lon, cityNow },
});



export const setPhotoUrl = (photoUrl: string | null) => ({
    type: 'SET_PHOTO_URL',
    payload: photoUrl,
});

export const setLogins = (login: string | null) => ({
    type: 'SET_LOGIN',
    payload: login,
});