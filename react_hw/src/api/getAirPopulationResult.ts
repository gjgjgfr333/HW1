
export const getAirPopulationResult = async (latitude: string, longitude: string) => {
    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const resp = await response.json()
        console.log(resp)
        // return await response.json();
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }

};
export const prossesAirPopulation = (data: any): (string | null)[] => {
    if (!data || !data.list || !Array.isArray(data.list)) {
        return [];
    }

    return data.list
        .filter((item: any, index: number) => index % 24 === 0)
        .map((item: any) => {
            switch (item.main?.aqi) {
                case 1:
                    return `очень низкий`;
                case 2:
                    return `низкий`;
                case 3:
                    return `средний`;
                case 4:
                    return `высокий`;
                case 5:
                    return `очень высокий`;
                default:
                    return null;
            }
        });
};
