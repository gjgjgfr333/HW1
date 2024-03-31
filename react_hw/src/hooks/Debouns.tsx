import { useEffect, useState } from "react";

export const useDebounce = (value: any, delay: number = 300) => {
    const [debounced, setDebounced] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(value);
        }, delay);

        // Возвращаем функцию для очистки таймера при размонтировании компонента
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debounced;
};
