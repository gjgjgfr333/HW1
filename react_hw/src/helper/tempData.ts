export function processTemperature(temp: string | undefined): number {
    if (temp === undefined) {
        return 0;
    }
    return Math.round(+temp - 273);
}