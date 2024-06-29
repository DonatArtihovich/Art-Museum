import { useEffect, useRef, useState } from "react";

export function useFetch<T>(url: string, options?: RequestInit) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<T>();
    const [error, setError] = useState<unknown>();
    const cache = useRef<Record<string, string>>({});

    useEffect(() => {
        async function fetchData() {
            if(cache.current[url]) {
                setResponse(JSON.parse(cache.current[url]));
            } else {
                try {
                    const res = await fetch(url, options);
                    const json = await res.json();
                    setResponse(json);
                } catch(e) {
                    setError(e);
                }
            }

            setIsLoading(false)
        }

        fetchData()
    }, [url, options])

    return {isLoading, response, error}
}