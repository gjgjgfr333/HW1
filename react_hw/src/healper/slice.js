export const setCoordinates = (lat, lon,cityNow) => ({
    type: 'SET_COORDINATES',
    payload: { lat, lon, cityNow },

});