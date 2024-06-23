import { useEffect, useState } from "react";

export const useDebounce = (val: string, wait = 500) => {
    const [value, setValue] = useState('')
    console.log(value);

    useEffect(() => {
        const timeout = setTimeout(() => setValue(val), wait);

        return () => clearTimeout(timeout);
    }, [val])

    return value;
}