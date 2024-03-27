export const setCoordinates = (lat:string, lon:string,cityNow:string) => ({
    type: 'SET_COORDINATES',
    payload: { lat, lon, cityNow },

});