
export const getAirPopulationResult = (latitude: string, longitude: string) => {
   return fetch(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=7e2ff37f25bf00f92d20d0c8c9e5b5e8`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Api по загрязнению воздуха не смогло подключиться');
            }
            return response.json();
        })
}

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
