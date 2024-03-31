export const extractData = (dataArray: string[], propertyPath : string) => {
    return dataArray
        .filter((item, index) => index % 8 === 0)
        .map(item => {
            const pathParts = propertyPath.split('.');
            let value : string | undefined = item;
            for (const part of pathParts) {
                if (value && typeof value === 'object') {
                    value = value[part];
                } else {
                    value = undefined;
                    break;
                }
            }
            return value;
        });
};