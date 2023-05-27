import { useState, useCallback } from 'react';

// /. imports

export function useFetchApi(): any {
    const [error, setError] = useState<null | string>(null);

    // /. hooks

    const fetchRequest = useCallback(
        async (
            URL: string,
            method = 'GET',
            body: null | string = null,
            headers = {} as { [key: string]: string }
        ): Promise<any> => {
            try {
                if (body) {
                    body = JSON.stringify(body);
                    headers['Content-Type'] = 'application/json';
                }

                const response = await fetch(URL, {
                    method,
                    body,
                    headers
                });

                const data = await response.json();

                if (response.status >= 400) {
                    throw new Error(`code ${response.status}`);
                } else {
                    console.log(`SUCCESS: code ${response.status}`);
                    setError(null);
                }

                return data;
            } catch (err: any) {
                console.error(`Error: ${err}`);
                setError(err.message);
            }
        },
        []
    );

    return { error, fetchRequest };
}
